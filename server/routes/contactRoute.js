const express = require("express");
const ContactForm = require("../controllers/contactController");

const router = express.Router();

router.route("/contact").post(ContactForm);

module.exports = router;
