const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const { getPaymentOrder, sendPaymentOrder } = require("../controllers/payments-controller")
 
dotenv.config();

router.get("/order", getPaymentOrder);

router.post("/capture/:paymentId", sendPaymentOrder);

module.exports = router;
