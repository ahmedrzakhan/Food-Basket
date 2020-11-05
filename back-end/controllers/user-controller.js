const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const { validationResult } = require("express-validator");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;
dotenv.config();
const client = require("twilio")(accountSid, authToken);

const User = require("../models/User");

let registerOTP;

const generateOTP = () => {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp = otp + Math.floor(Math.random() * 10);
  }
  return Number(otp);
};

const sendOTP = async (req, res) => {
  const { mobileNumber } = req.body;
  try {
    registerOTP = generateOTP();
    client.messages
      .create({
        body: `OTP to verify your Food Basket account is ${registerOTP}`,
        from: "+12056248885",
        to: `+91${mobileNumber}`,
      })
      .then((message) => console.log(message.sid));
    res.status(200).send("OTP sent successfully");
  } catch (err) {
    res.status(400).send(err);
  }
};

const registerUser = async (req, res) => {
  const { date, email, mobile_no, userOTP, password, username } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  if (registerOTP !== Number(userOTP)) {
    res.status(400).send("Invalid OTP");
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

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(400).send("Email or password is incorrect");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) return res.status(400).send("Invalid Password");

  res.json({ username: user.email, message: "Logged in Successfully" });
};

module.exports = { sendOTP, registerUser, loginUser };
