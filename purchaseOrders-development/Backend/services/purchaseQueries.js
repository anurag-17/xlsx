
const AWS = require("aws-sdk");
const config = require("../config");
var dynamodb = new AWS.DynamoDB();


//let po
const  getData= (id)=>  {
     const values={
        TableName:'podetails',
        Key: {
          ponumber:
           {  S: id }
         }
      }
      return values
    } 

//         dynamodb.getItem(values,(err,data)=>{
//      if(data)
//      {
      
//         let details=data.Item.details.L.map(function(listdata){
//           const record={description:listdata.M.description.S,amount :listdata.M.amount.S}
//           return record
//         })
       
//           po={ponumber:data.Item.ponumber.S,date:data.Item.date.S,details:details}
//         return 1
//       }
//       else
//       {

//       }
    
      
//     })
//    return po
    
    
// }


const insert=(data)=> {
    var itemslist=data.items.map(function(item){
     var record = { M:{description: {S: item.po_description },amount:{S:item.amount} }}
     return record
    })
    console.log(itemslist);
    const params = {
      TableName: "podetails",
      Item: {
        ponumber: { S: data.details.po_id },
        details:{L: itemslist},
        date: { S: data.details.po_date }
      },
    };
  
    dynamodb.putItem(params, (err)=> {
      if (err) {
        console.error("Unable to add po details", err);
      } else {
        console.log(`items added`);
      }
    });
}


module.exports={getData,insert};