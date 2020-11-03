const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../models/User");

const addUser = async (req, res) => {
  const { date, email, mobile_no, password, username } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const emailExists = await User.findOne({ email: email });
  if (emailExists) {
    return res.status(400).send("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

  const user = new User({
    date,
    email,
    mobile_no,
    password: hashedPassword,
    username,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { addUser };
