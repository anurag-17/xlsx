const mongoose=require("mongoose")
const xlsxData=new mongoose.Schema({
    sno: {
        type: String,
        required: [true, "please provide username"],
      },
})
const excel=mongoose.model("xlsx",xlsxData);
module.exports=excel``