const express = require("express");
const router = express.Router();
const { register, login, uploadXLSX, xlsxget, isAuthuser, dashboard, logout, employregister, employylogin } = require("../controllers/auth");

router.route("/adminregister").post(register);
router.route("/employregister").post(employregister);
router.route("/login").post(login);
router.route("/employlogin").post(employylogin);
router.route("/getxlsxfile").get(xlsxget);
router.route("/me").get(isAuthuser, dashboard);
router.route("/logout").get(logout);

module.exports = router;
