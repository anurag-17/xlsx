const express = require("express");
const router = express.Router();
var multer = require("multer")
const path = require("path");
const { register, login,  uploadXLSX, xlsxget } = require("../controllers/auth");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getxlsxfile").get(xlsxget);

module.exports = router;
