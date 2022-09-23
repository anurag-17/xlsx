
// Entry Point of Api

const express = require('express');
const service= require('./services/purchaseQueries');
const xlService=require('./services/xls_edit.js')
const app = express();
const port =  9000;
const cors=require('cors');
const  config = require('./config');
app.use(express.json());
config.config
app.use(cors({
    origin:'http://localhost:3000'
}));

// To get items

app.get("/getdetails/:id",(req,res)=>
{
    const id =req.params.id
   const values =service.getData(id)  
   config.dynamodb.getItem(values,(err,data)=>{
    if(data.Item!==undefined)
    {  console.log(data.Item) 
       let details=data.Item.details.L.map(function(listdata){
         const record={description:listdata.M.description.S,amount :listdata.M.amount.S}
         return record
       })
      
       let  po={ponumber:data.Item.ponumber.S,date:data.Item.date.S,details:details}
       console.log(po)
      res.send(po)
     }
    else
     {
       
        res.sendStatus(404)
     }
      
   })
  
  

    })


// To post details

app.post('/poDetails',(req,res)=>{
    data=req.body;
    service.insert(data);
    res.send('inserted');
});

app.post('/xlData',(req,res)=>{
    data=req.body;
    xlService.xls_insert(data);
    res.send('inserted');
});


app.listen(port, () => console.log(`App Running on port ${port}!`))