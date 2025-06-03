const bcrypt = require("bcrypt");
const User = require("../models/User");
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        sucess: false,
        message: "User already esists",
      });
    }
    // secure password by hashing
    let hashPassword;
    try {
      hashPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "error in hashing",
      });
    }
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      role,
    });
    return res.status(200).json({
      success: true,
      message: "user signup successful",
    });
  } catch (error) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "user cannot be registered ",
    });
  }
};
