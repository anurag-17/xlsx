const express = require("express");
const xlsx = require("xlsx");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const connectDB = require("./config/db");
const bodyParser = require('body-parser');
const cors= require("cors")
 const fs=require("fs")
 const app = express();
 app.use(express.json())
 app.use(express.urlencoded({extended: true}))
 app.use(cors())
 app.use(bodyParser.json({limit:'50mb'}))
 app.use(bodyParser.urlencoded({
  extended:true
 }))
 connectDB();
//connect router
app.use("/api/auth", require("./route/roter"))

 
app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});

