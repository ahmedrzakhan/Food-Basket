const express = require("express");
const router = express.Router();

const {
  getByCategory,
  getBySubCategory,
  getProductsByCity,
  getProductItem,
  getProductsBySearch,
  getProductsByBrand,
} = require("./../controllers/categories-controller");

router.get("/category", getByCategory);
router.get("/sub-category", getBySubCategory);
router.get("/products-by-city", getProductsByCity);
router.get("/product", getProductItem);
router.get("/product/search", getProductsBySearch);
router.get("/product/brand", getProductsByBrand);
module.exports = router;
