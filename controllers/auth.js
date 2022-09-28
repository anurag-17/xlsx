const catchAsyncerror = require("../middleware/catchAsyncerror");
const emailValidator = require("deep-email-validator");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const Excell = require('../model/xlsx')

async function isEmailValid(email) {
    return emailValidator.validate(email);
  }
// exports.register = (req, res, next) => {
//   // res.send("hello people");

//   //  step 1: ReAD EXCEL FILE

//   const WB = xlsx.readFile("SampleData(3).xlsx", { dateNF: "mm/dd/yyyy" });
//   //  step 2: ReAD SHEET FROM WORKBOOKEXCEL FILE
//   const ws = WB.Sheets.Sheet1;

//   // step 3:READ SGHEET DATA AND CONVERT IT JSON
//   console.log(ws);
//   const data = xlsx.utils.sheet_to_json(ws, { raw: false });
//   console.log(data);
//   //  STEP-5  WRITE JSON DATA INTO JSON FILE BY STRINGIFY DATA
//   fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
// };
exports.register = catchAsyncerror(async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json("plese fill all input ");
  }
  if (password.length < 8) {
    return res.status(400).json("password must be 8 character long");
  }
  try {
    user.findOne({ email }, async (err, user) => {
      const { valid, reason, validators } = await isEmailValid(email);
      // console.log(validators);

      if (!valid) {
        return res
          .status(500)
          .json("email is invalid please enter a valid email");
      } else if (user) {
        return res.status(500).json("user already registered");
      } else {
        const userData = await User.create({
          email,
          password,
        });

        sendToken(userData, 201, res);
      }
      return;
    });
  } catch (error) {
    console.log(error.message);
  }
});
exports.login = catchAsyncerror(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json("plz fill all input");
    }
    const user = await User.findOne({ email }).select("+password");
    // console.log(user);
    if (!user) {
      return res.status(500).json("invalid credentials user not found");
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(500).json("password is not valid please register");
    }
    // res.status(201).json(user)

    sendToken(user, 200, res);
  } catch (error) {
    throw new Error(error);
  }
});

exports.uploadXLSX=catchAsyncerror(async(req,res,next)=>{
  try{
    let path = req.file.path;
    var workbook = XLSX.readFile(path);
    var sheet_name_list = workbook.SheetNames;
    let jsonData = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheet_name_list[0]]
    );
    if(jsonData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "xml sheet has no data",
      });
    }
    // console.log(jsonData)
    let savedData = await Excell.insertMany(jsonData);

    return res.status(201).json({
      success: true,
      message: savedData.length + " rows added to the database",
      data:savedData
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
})
exports.xlsxget=catchAsyncerror(async(req,res,next)=>{
  const data = await Excell.find({},{_id: 0 })
  return res.status(200).json(data)
})
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  // option for cookie
  const options = {
    expire: new Date(Date.now + 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};
