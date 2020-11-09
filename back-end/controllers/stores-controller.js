const Stores = require("../models/Stores");

const getStores = async (req, res) => {
  const stores = await Stores.find();

  res.send(stores);
};

const addStores = async (req, res) => {
  const { city, locations } = req.body;
  const store = new Stores({
    city,
    locations,
  });

  try {
    const savedStore = await store.save();
    res.send(savedStore);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { getStores, addStores };
