const express = require("express");
const router = express.Router();

const { getOrder, addOrder } = require("./../controllers/orders-controller")

router.get("/get-order", getOrder)
router.post("/add-order", addOrder)

module.exports = router