import React, { useState } from "react";
import { Box, TextField, Checkbox } from "@material-ui/core";
import styles from "./checkout.module.css";
// import {userOrder} from "./../Redux/orders/actions"
// import { useDispatch, useSelector } from "react-redux";

function Address() {
  const [orderInputs, setOrderInputs] = useState({
    first_name: "",
    last_name: "",
    address: "",
    landmark: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    mobile_no: "",
  });
  // const dispatch = useDispatch()
  const userDeatils = JSON.parse(localStorage.getItem("user"));
  // console.log(userDeatils)

  let myCart = [];
  for (let i = 0; i < localStorage.length; i++) {
    //   console.log(Object.keys(localStorage))
    if (Object.keys(localStorage)[i] !== "rzp_device_id") {
      if (
        localStorage.getItem(localStorage.key(i)) === "true" ||
        localStorage.getItem(localStorage.key(i)) === "false" ||
        Object.keys(localStorage)[i] === "user"
      ) {
        continue;
      } else {
        // console.log(localStorage.getItem( localStorage.key( i ) ), "LOCAL STORAGE")
        let temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
        // console.log(temp, "TEMP")
        myCart.push(temp);
      }
    }
  }

  const handleChange = (event) =>
    setOrderInputs({
      ...orderInputs,
      [event.target.name]: event.target.value,
    });

  const handleReviewAndPlaceOrder = () => {
    alert("Order Placed");
    const finalOrder = {
      username: userDeatils.username,
      full_address: [
        {
          first_name: orderInputs.first_name,
          last_name: orderInputs.last_name,
          address: orderInputs.address,
          landmark: orderInputs.landmark,
          pincode: orderInputs.pincode,
          country: orderInputs.country,
          state: orderInputs.state,
          city: orderInputs.city,
          mobile_no: orderInputs.mobile_no,
        },
      ],
      products: myCart,
    };

    localStorage.setItem("OrderSummary", JSON.stringify(finalOrder));

    // dispatch(userOrder(finalOrder))
  };

  return (
    <>
      <Box>
        <Box>
          ADDRESS <span>DETAILS</span>
        </Box>
        <Box>
          <button onClick={handleReviewAndPlaceOrder} className={styles.btn}>
            REVIEW AND PLACE ORDER
          </button>
        </Box>
        <Box classes={{ root: styles.ship }}>
          Enter Shipping Address
          <br />
          <small>(Fields marked with * are mandatory)</small>
        </Box>

        <Box>
          <Box classes={{ root: styles.box }}>First Name*</Box>
          <Box>
            {" "}
            <TextField
              name="first_name"
              onChange={handleChange}
              variant="outlined"
            />
          </Box>
        </Box>
        <Box>
          <Box classes={{ root: styles.box }}>Last Name*</Box>
          <Box>
            {" "}
            <TextField
              name="last_name"
              onChange={handleChange}
              variant="outlined"
            />
          </Box>
        </Box>

        <Box>
          <Box classes={{ root: styles.box }}>Address*</Box>
          <Box>
            {" "}
            <TextField
              name="address"
              onChange={handleChange}
              variant="outlined"
            />
          </Box>
        </Box>
        <Box>
          <Box classes={{ root: styles.box }}>Landmark*</Box>
          <Box>
            {" "}
            <TextField
              name="landmark"
              onChange={handleChange}
              variant="outlined"
            />
          </Box>
        </Box>
        <Box>
          <Box classes={{ root: styles.box }}>Pincode*</Box>
          <Box>
            {" "}
            <TextField
              name="pincode"
              onChange={handleChange}
              variant="outlined"
            />
          </Box>
        </Box>
        <Box>
          <Box classes={{ root: styles.box }}>Country*</Box>
          <Box>
            {" "}
            <TextField
              name="country"
              onChange={handleChange}
              variant="outlined"
            />
          </Box>
        </Box>
        <Box>
          <Box classes={{ root: styles.box }}>State*</Box>
          <Box>
            {" "}
            <TextField
              name="state"
              onChange={handleChange}
              variant="outlined"
            />
          </Box>
        </Box>
        <Box>
          <Box classes={{ root: styles.box }}>City*</Box>
          <Box>
            {" "}
            <TextField name="city" onChange={handleChange} variant="outlined" />
          </Box>
        </Box>
        <Box>
          <Box classes={{ root: styles.box }}>Mobile No*</Box>
          <Box>
            {" "}
            <TextField
              name="mobile_no"
              onChange={handleChange}
              variant="outlined"
            />
          </Box>
        </Box>
        <Box>
          Billing Address <Checkbox />
          Same as Shipping address
        </Box>
      </Box>
    </>
  );
}
export default Address;
