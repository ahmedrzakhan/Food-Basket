const dotenv = require("dotenv");
const express = require("express");
const { body } = require("express-validator");

const { addUser } = require("./../controllers/user-controller");
dotenv.config();

const router = express.Router();

router.post("/register", [body("email").isEmail()], addUser);

// Authenticate Token
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["Authorization"];
//   const token = authHeader && authHeader.split("")[1];

//   if (token === null) {
//     return res.sendStatus(400);
//   }

//   jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//     if (err) {
//       return res.sendStatus(403);
//     }
//     req.user = user;

//     next();
//   });
// }

module.exports = router;
