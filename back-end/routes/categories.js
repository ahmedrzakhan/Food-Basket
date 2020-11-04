const express = require("express");
const router = express.Router();

const { getByCategory, getBySubCategory, getProductsByCity, getProductItem } = require("./../controllers/categories-controller");
// get

router.get("/category", getByCategory);
router.get("/sub-category", getBySubCategory);
router.get("/products-by-city", getProductsByCity)
router.get("/product", getProductItem);
module.exports = router;
