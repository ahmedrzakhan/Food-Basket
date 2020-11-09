const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storeSchema = new Schema(
  {
    city: { type: String, trim: true, required: true },
    locations: { type: mongoose.Mixed, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Store", storeSchema);
