import React from "react";
import { Box, Container, Button } from "@material-ui/core";
import TopNav from "../dashboard/TopNavBar/TopNav";
import RouteNav from "../dashboard/TopNavBar/RouteNav";
import Footer from "../Footer/Footer";
import styles from "./cart.module.css";
import { styled } from '@material-ui/styles';
import { useHistory } from 'react-router-dom' 

const cartData = [
  {
    image:
      "https://gnbdevcdn.s3.amazonaws.com/ProductVariantThumbnailImages/6151dbdd-4c99-4614-a330-6909526fc3f6_50x50.JPG",
    name: "corn flakes corn flakes corn flakes corn flakes",
    price: 20,
    qty: 1,
    subtotal: 11,
    category: "confectionari",
  },
  {
    image:
      "https://gnbdevcdn.s3.amazonaws.com/ProductVariantThumbnailImages/6151dbdd-4c99-4614-a330-6909526fc3f6_50x50.JPG",
    name: "corn flakes corn flakes corn flakes corn flakes",
    price: 20,
    qty: 1,
    subtotal: 11,
    category: "confectionari",
  },
  {
    image:
      "https://gnbdevcdn.s3.amazonaws.com/ProductVariantThumbnailImages/6151dbdd-4c99-4614-a330-6909526fc3f6_50x50.JPG",
    name: "corn flakes",
    price: 20,
    qty: 1,
    subtotal: 11,
    category: "confectionari23",
  },
];
const MyButton1 = styled(Box)({
    background: 'transparent',
    border:'2px solid #92be4d',
    borderRadius: '3px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '10px 30px',
    float: "left",
    fontSize: "16px",
    color: '#595959',
    marginRight:"10px"
});
const MyButton2 = styled(Box)({
    background: '#578f1b',
    border: 'none',
    borderRadius: '3px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '10px 30px',
    float: "left",
    fontSize: "16px",
    color: 'white',
});
function Cart() {
    const history =useHistory()
  return (
    <>
      <TopNav />
      <RouteNav />
      <Box classes={{ root: styles.main }}>
        <Box classes={{ root: styles.shopping }}>
          <Box classes={{ root: styles.head }}>
            {" "}
            MY CART <span>(2 ITEMS)</span>
          </Box>
          <Box>
            <MyButton1 onClick ={()=>history.push('/')}>
              CONTINUE SHOPPING
            </MyButton1>
            <MyButton2 onClick={() => history.push('/checkout')}>
            PROCCED TO CHECKOUT
            </MyButton2>
          </Box>
        </Box>

        <Box classes={{ root: styles.flex }}>
          <Box classes={{ root: styles.display }}>
            <Box  classes={{ root: styles.name }}>Name</Box>
            <Box>Price</Box>
            <Box>Qty</Box>
            <Box>Sub-Total</Box>
          </Box>
        </Box>
             
    <Box classes={{root:styles.newShopping}}>
        {cartData.map((item, i) => (
          <Box key={i}>
                <Box classes={{ root: styles.subheading }}>
              <h3>{item.category}</h3>
                </Box>
              
           
         
            
             <Box classes={{ root: styles.items }}>
              <Box classes={{ root: styles.name1 }}>
                <Box>
                  <img src={item.image} alt="food" />
                </Box>
                <Box>{item.name}</Box>
                <Box>
                  <img
                    height="20px"
                    src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/8ab57ed4-47e0-426a-8382-f4c89b11826a.png"
                    alt="delivery"
                  />{" "}
                </Box>
              </Box>

              <Box>₹{item.price}</Box>

              <Box>{item.qty}</Box>
              <Box>
                ₹{item.subtotal}{" "}
                <img
                  className={styles.close}
                  src="https://d1z88p83zuviay.cloudfront.net/Images/login-close.png"
                  alt="close"
                />
              </Box>
            </Box> 
          </Box>
          
        ))}
              </Box> 
              
              <Box classes={{root:styles.total}}>
                  <Box classes ={{root:styles.sub}}> Sub-Total: </Box>
                  <Box classes ={{root:styles.del}}> Delivery Charges :</Box>
                  <Box classes ={{root:styles.tot}}> Total: </Box>
              </Box>
              <Box classes={{ root: styles.shopping }}>
                  <Box classes={{ root: styles.head }}>
                      {" "}
                  </Box>
                  <Box>
                      <MyButton1 onClick={() => history.push('/')}>
                          CONTINUE SHOPPING
            </MyButton1>
            <MyButton2 onClick={() => history.push('/checkout')}c>
                          PROCCED TO CHECKOUT
            </MyButton2>
                  </Box>
              </Box>
              
          </Box>

      
          
         
    </>
  );
}
export default Cart;
