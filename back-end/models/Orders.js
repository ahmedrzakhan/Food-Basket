const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ordersSchema = new Schema(
  {
    full_address: { type: mongoose.Mixed, required: true },
    products: { type: mongoose.Mixed, required: true },
    username: { type: String, required: true, trim: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("orders", ordersSchema);
