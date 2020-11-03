const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, trim: true, max: 255 },
    mobile_no: { type: String, required: true, trim: true, max: 255 },
    email: { type: String, required: true, trim: true, max: 255 },
    password: { type: String, required: true, trim: true, max: 255 },
    date: { type: String, default: Date.now },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);
