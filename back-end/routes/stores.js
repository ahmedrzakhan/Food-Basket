const express = require("express");
const router = express.Router();

const { getStores, addStores } = require("./../controllers/stores-controller")

router.get("/stores", getStores)

router.post("/add-stores", addStores)

module.exports = router;