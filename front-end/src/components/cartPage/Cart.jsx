import React, {useEffect} from "react";
import { Box, Container, Button } from "@material-ui/core";
import TopNav from "../dashboard/TopNavBar/TopNav";
import RouteNav from "../dashboard/TopNavBar/RouteNav";
import Footer from "../Footer/Footer";
import styles from "./cart.module.css";
import { styled } from '@material-ui/styles';
import { useHistory } from 'react-router-dom' 
import AddProduct from "../AddProduct/AddProduct";
import {  useSelector } from "react-redux";


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

  // Keep changes from here...by Rutvik
  const reqId = useSelector((state) => state.cart.cartChange); //by Rutvik
  let cartData = [] //by Rutvik

  let [cartArr, setCartArr] = React.useState([]) //by Rutvik
  let [totalSum, setTotalSum] = React.useState(0) //by Rutvik
  
  
  for(let i=0; i<localStorage.length; i++) //by Rutvik
    {

      console.log(Object.keys(localStorage))
      if(Object.keys(localStorage)[i] !== "rzp_device_id"  || localStorage.getItem( localStorage.key( i ) ) === "false" || localStorage.getItem( localStorage.key( i ) ) === "true" )
      {
            if( (( localStorage.getItem( localStorage.key( i ) ) ) ) === "true" ||  localStorage.getItem( localStorage.key( i ) ) === "false" )  //by Rutvik
          { 
            continue
          }
          else
          {
            console.log(localStorage.getItem( localStorage.key( i ) ), "LOCAL STORAGE")
            let temp = JSON.parse(localStorage.getItem( localStorage.key( i ) ))
            console.log(temp, "TEMP")
            cartData.push(temp) //by Rutvik

          }
      }
     
      
      // console.log(Object.keys(localStorage)[i])
    }
  
    console.log(cartData)
    let sum = 0 //by Rutvik
  let deliveryCharge = 50 //by Rutvik
  for(let i=0; i<cartData.length; i++) //by Rutvik
  {
    sum = sum + (cartData[i].inCartQty * cartData[i].price) //by Rutvik
  }
  

  useEffect(() => 
  {
      setCartArr(cartData) //by Rutvik
      setTotalSum(sum) //by Rutvik
      
  },[reqId]); //by Rutvik
     console.log(totalSum) //by Rutvik
    const history =useHistory()

 //Keep all this..   
  return (
    <>
      <TopNav />
      <RouteNav />
      <Box classes={{ root: styles.main }}>
        <Box classes={{ root: styles.shopping }}>
          <Box classes={{ root: styles.head }}>
            {" "}
            MY CART <span>({cartData.length} ITEMS)</span>
          </Box>
          <Box>
            <MyButton1 onClick ={()=>history.push('/')}>
              CONTINUE SHOPPING
            </MyButton1>
            <MyButton2 onClick={() => history.push('/checkout')}>
            PROCEED TO CHECKOUT
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
        { cartArr.map((item, i) => (
          <Box key={i}>
                <Box classes={{ root: styles.subheading }}>
              <h3>{item.category}</h3>
                </Box>
              
           
         
            
             <Box classes={{ root: styles.items }}>
              <Box classes={{ root: styles.name1 }}>
                <Box>
                  <img src={item.imageLink} height="100px" alt="food" />
                </Box>
                <Box onClick={() => history.push(`/product/${item.id}`) }>{item.title}</Box>
                {/* <Box>
                  <img
                    height="20px"
                    src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/8ab57ed4-47e0-426a-8382-f4c89b11826a.png"
                    alt="delivery"
                  />{" "}
                </Box> */}
              </Box>

              <Box>₹{item.price}</Box>

                { item.inCartQty > 0?
                  <Box>
                      <AddProduct subCategory={item.sub_ctg} id={item.id} />
                  </Box>
                  :
                  null
                }
             
              <Box>
                ₹{item.price * item.inCartQty}{" "}
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
                  <Box classes ={{root:styles.sub}}> Sub-Total: ₹ {totalSum} </Box>
                  <Box classes ={{root:styles.del}}> Delivery Charges : ₹ {deliveryCharge} </Box>
                  <Box classes ={{root:styles.tot}}> Total: ₹ {totalSum + deliveryCharge}</Box>
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
                          PROCEED TO CHECKOUT
            </MyButton2>
                  </Box>
              </Box>
              
          </Box>

      
          
         
    </>
  );
}
export default Cart;
