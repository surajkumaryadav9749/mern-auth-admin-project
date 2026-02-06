const Contact = require("../models/contact.model");

const contactForm = async (req, res, next) => {
  try {
    const { username, email, message } = req.body;
    if (!email || !username || !message) {
      return res
        .status(400)
        .json({ message: "Please provide complete details" });
    }

    const contactCreated = await Contact.create({ username, email, message });
    if (!contactCreated) {
      return res.status(500).json({ message: "Failed to send data" });
    }
    res.status(201).json({ message: "data sent successfully", success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = contactForm;
