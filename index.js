const express = require("express");

const Excell = require('./model/xlsx')
var multer = require("multer")
const XLSX = require('xlsx')
const path = require('path')
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const connectDB = require("./config/db");
const bodyparser = require("body-parser");
const cookiesparser = require("cookie-parser");
const cors =require("cors")
 const fs=require("fs")
 const app = express();
 app.use(express.json())
 app.use(express.urlencoded({extended: true}))
 connectDB();
app.use(cors())
app.use(cookiesparser());
app.use(bodyparser.urlencoded({ extended: true }));
//connect router
app.use("/api/auth", require("./route/roter"))


// --------------------------deployment------------------------------
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
("hi");

// --------------------------deployment------------------------------



app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});

// var express = require("express");
// var multer = require("multer")
// var fs = require("fs")
// const mongoose = require("mongoose")
// const path = require("path");
// const app = express();
// const port = 4500;
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const XLSX = require('xlsx')
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(cors())

// // mongoose.connect("mongodb://localhost:27017/imgupload")
// mongoose.connect(process.env.MONGO_URI,
//     { useNewUrlParser: true, useUnifiedTopology: true }, err => {
//         console.log('connected')
//     });

// app.get("/",(req, res) => {
//     res.send("hello people");
// });

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads')
//       },
//     filename: function (req, file, cb) {
//         cb(null , file.originalname);
//     }
//   });

// const uploadXLSX = async(req, res, next) => {
//     try{
//       let path = req.file.path;
//       var workbook = XLSX.readFile(path);
//       var sheet_name_list = workbook.SheetNames;
//       let jsonData = XLSX.utils.sheet_to_json(
//         workbook.Sheets[sheet_name_list[0]]
//       );
//       if(jsonData.length === 0) {
//         return res.status(400).json({
//           success: false,
//           message: "xml sheet has no data",
//         });
//       }
//       console.log(jsonData)
//       let savedData = await Excell.insertMany(jsonData);
  
//       return res.status(201).json({
//         success: true,
//         message: savedData.length + " rows added to the database",
//         data:savedData
//       });
//     } catch (err) {
//       return res.status(500).json({ success: false, message: err.message });
//     }
//   };

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + "-" + file.originalname);
//     },
//   });
//   var upload = multer({storage:storage})

// app.post("/upload", upload.single("xlsx"),uploadXLSX);

// app.get('/photos', async(req, res) => {
//     const data = await Images.find()
//     return res.status(200).json(data)
// })

// app.delete("/deleteall",async(req,res)=>{
//   const data = await Images.deleteMany()
//   return res.status(200).json(data)
// })

// app.post("/uploadimg",
// upload.single('profile'),
// async(req,res)=>{
// try {
//     var img = fs.readFileSync(req.file.path);
//     var encode_image = img.toString('base64')

//   const image = await new Images({
//         img:req.file.path,
//         name:"Ashutosh",
//     })

//     image.save()
//     res.status(200).json({message:"success"})
 
// } catch (error) {
//     console.log(error)
// }
    


// })

// app.listen(port, () => {
//     console.log(`listening to the port ${port}`);
// })