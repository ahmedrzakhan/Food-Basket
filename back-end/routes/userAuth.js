const dotenv = require("dotenv");
const express = require("express");
const { body } = require("express-validator");

const { registerUser, loginUser } = require("./../controllers/user-controller");
dotenv.config();

const router = express.Router();

router.post("/register", [body("email").isEmail()], registerUser);

router.post("/login", [body("email").isEmail()], loginUser);

module.exports = router;
