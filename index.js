const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const connectDB = require("./config/db");


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
