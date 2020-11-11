import React from "react";
import axios from "axios";

// Render this component in place of make payment button

const Razorpay = () => {
  const paymentHandler = async (e) => {
    e.preventDefault();
// 
    const amount = 300;
    const API_URL = `http://localhost:5000/api/payments`;
    const orderUrl = `${API_URL}/order?amount=${amount}`;
    const response = await axios.get(orderUrl);
    const { data } = response;
    const options = {
      name: "Food Basket",
      description: "Thanks for ordering at",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}/capture/${paymentId}`;
          const capturedResponse = await axios.post(url, {});
          const successObj = JSON.parse(capturedResponse.data);
          const captured = successObj.captured;
          if (captured) {
            console.log("Success");
          }
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#c6203d",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <button onClick={paymentHandler}>PAY</button>
    </div>
  );
};

export default Razorpay;
