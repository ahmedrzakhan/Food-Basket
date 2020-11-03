const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categoriesSchema = new Schema(
  {
    category: { type: String, required: true, trim: true },
    sub_category: { type: String, required: true, trim: true },
    cities: { type: mongoose.Mixed, required: true },
    product: { type: mongoose.Mixed, required: true },
    gluten_free: { type: Boolean, required: false },
    sugar_free: { type: Boolean, required: false },
    fat_free: { type: Boolean, required: false },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("categories", categoriesSchema);
