var xlsx = require("xlsx");
const xls_insert=(data)=>
{
    var wb =xlsx.readFile("./Resources/Temp_file.xlsx")
 var sheetname= wb.SheetNames
 console.log(sheetname)
var ws =wb.Sheets['data']
var xls=xlsx.utils.sheet_to_json(ws)
data.items.map(userData=>{
    const index=xls.findIndex((emp)=>(emp.Emp_Name===userData['Emp_Name']))
    if(index!==-1)
    {   
       xls[index][data['col_name']] = userData['col_data']
    }
    else
    {
        xls.push(userData)
    }
    
})
var newWs=xlsx.utils.json_to_sheet(xls);
var newwb=xlsx.utils.book_new()
xlsx.utils.book_append_sheet(newwb,newWs,'data')
sheetname.map(sheet=>
{ 
    if(sheet!=='data'){
        var ws =wb.Sheets[sheet]
        xlsx.utils.book_append_sheet(newwb,ws,sheet)
    }  
})
xlsx.writeFile(newwb,"./Resources/Temp_file.xlsx")
}
module.exports={xls_insert};






