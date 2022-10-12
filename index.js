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
