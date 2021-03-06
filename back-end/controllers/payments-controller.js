const request = require("request");
const { v4: uuidv4 } = require("uuid");
const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: process.env.RAZAORPAY_KEY_ID,
  key_secret: process.env.RAZAORPAY_KEY_SECRET,
});

const getPaymentOrder = async (req, res) => {
  const { amount } = req.query;
  try {
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: uuidv4(),
      payment_capture: 0,
    };

    instance.orders.create(options, (err, order) => {
      if (err) {
        return res.status(500).json({ message: "Something went wrong" });
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const sendPaymentOrder = async (req, res) => {
  try {
    return request(
      {
        method: "POST",
        url: `https://${process.env.RAZAORPAY_KEY_ID}:${process.env.RAZAORPAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form: {
          amount: 10 * 10,
          currency: "INR",
        },
      },
      async function (err, res, body) {
        if (err) {
          return res.status(500).json({ message: "Something went wrong" });
        }
        return res.status(200).json(body);
      }
    );
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { getPaymentOrder, sendPaymentOrder };
