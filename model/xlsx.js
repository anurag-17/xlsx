var mongoose  =  require('mongoose');  
   
var excelSchema = new mongoose.Schema({  
    name:{
  
        type:String  
    },  
   img:{
    type:String
   }
},{"strict":false});  
const user=mongoose.model('excelldata',excelSchema);  
module.exports = user