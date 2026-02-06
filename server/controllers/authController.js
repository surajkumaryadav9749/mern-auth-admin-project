const User = require("../models/user.model");

const authRegister = async (req, res, next) => {
  try {
    //request data
    const { username, email, password } = req.body;

    //check data
    if (!username || !email || !password) {
      res.status(400).json({ message: "please provide complete details" });
    }
    // check if user exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ msg: "user already exist" });
    }

    //hashing password
    const salted = 10;
    const hashedPass = await bcryptjs.hash(password, salted);
    const newUser = await User.create({
      username,
      email,
      password: hashedPass,
    });
    if (newUser) {
      res
        .status(201)
        .json({ message: "User created successfully", success: true });
    }
  } catch (error) {
    next(error);
  }
};

const authLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check request data
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "data is incomplete", success: false });
    }

    //check user existance
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res
        .status(400)
        .json({ message: "User Not Found", success: false });
    }

    //check password
    const checkPassword = await bcryptjs.compare(password, userExist.password);
    if (!checkPassword) {
      return res
        .status(400)
        .json({ message: "Invalid Password", success: false });
    }

    const token = userExist.generateToken();
    if (token) {
      res.status(200).json({
        message: "user login successfully",
        success: true,
        token: token,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong", error: error });
  }
};

module.exports = { authLogin, authRegister };
