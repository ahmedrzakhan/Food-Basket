const Orders = require("./../models/Orders");

const getOrder = async (req, res) => {
  const { username } = req.query;

  const orders = await Orders.find({ username: username });

  res.send(orders);
};

const addOrder = async (req, res) => {
  const { full_address, products, username } = req.body;

  const order = new Orders({
    username,
    full_address,
    products,
  });

  try {
    const savedOrder = await order.save();
    res.send(savedOrder);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { getOrder, addOrder };
