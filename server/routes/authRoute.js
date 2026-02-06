const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

//register API
router.route("/register").post(authController.authRegister);

//Login API
router.route("/login").post(authController.authLogin);

module.exports = router;
