const XLSX = require('xlsx');
const user = require('../model/xlsx');

exports.register=async (req,res,next)=>{

const {items}=req.body
console.log(items);
const da= items
 await user.create({
  da

})


    //  step 1: ReAD EXCEL FILE
 
//  const WB =XLSX.readFile('SampleData(3).xlsx',{dateNF:"mm/dd/yyyy"})
//  //  step 2: ReAD SHEET FROM WORKBOOKEXCEL FILE
//   const ws= WB.Sheets.Sheet1;

//  // step 3:READ SGHEET DATA AND CONVERT IT JSON
// console.log(ws);
//  const data= XLSX.utils.sheet_to_json(ws,{raw:false})
// //  console.log(data);
// //  STEP-5  WRITE JSON DATA INTO JSON FILE BY STRINGIFY DATA
// fs.writeFileSync("./data.json",JSON.stringify(data,null,2))
 
}