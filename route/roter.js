const express = require("express");
const router = express.Router();
const { register, login, uploadXLSX, xlsxget, isAuthuser, dashboard, logout } = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getxlsxfile").get(xlsxget);
router.route("/me").get(isAuthuser, dashboard);
router.route("/logout").get(logout);

module.exports = router;
