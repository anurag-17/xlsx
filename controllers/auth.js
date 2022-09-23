exports.register=(req,res,next)=>{
    // res.send("hello people");


     //  step 1: ReAD EXCEL FILE
 
 const WB =xlsx.readFile('SampleData(3).xlsx',{dateNF:"mm/dd/yyyy"})
 //  step 2: ReAD SHEET FROM WORKBOOKEXCEL FILE
  const ws= WB.Sheets.Sheet1;

 // step 3:READ SGHEET DATA AND CONVERT IT JSON
console.log(ws);
 const data= xlsx.utils.sheet_to_json(ws,{raw:false})
 console.log(data);
//  STEP-5  WRITE JSON DATA INTO JSON FILE BY STRINGIFY DATA
fs.writeFileSync("./data.json",JSON.stringify(data,null,2))
}