import React, {useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import {usergetOrder} from "./../Redux/orderSummary/actions"
import { useHistory } from "react-router-dom";
import Razorpay from "../payments/Razorpay";
import styles from "./OrderSummary.module.css"
import {userOrder} from "./../Redux/orders/actions"
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function OrderSummary(){
    const userDeatils = JSON.parse(localStorage.getItem("user"))
    const history = useHistory()
    const dispatch = useDispatch()
    const orderSummaryArr = JSON.parse(localStorage.getItem("OrderSummary")) || []
    const classes = useStyles();
    let totalAmt = 0
    if(orderSummaryArr && orderSummaryArr.products)
    {
        for(let i=0; i< orderSummaryArr.products.length; i++)
    {
        totalAmt = totalAmt + (orderSummaryArr.products[i].price * orderSummaryArr.products[i].inCartQty)
    }
    }
    const handlePayment = () => {
        alert("PAYMENT")
        dispatch(userOrder(orderSummaryArr))
        // history.push("/payments")
    }
    return(
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Product Name</TableCell>
                        <TableCell align="right">Product Category</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Sub-total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderSummaryArr.products.map((row) => (
                            <TableRow key={row._id}>
                            <TableCell component="th" scope="row">
                            <img src={row.imageLink} height="100px" alt={row.title} />
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.category}</TableCell>
                            <TableCell align="right">{row.inCartQty}</TableCell>
                            <TableCell align="right">₹{row.price}</TableCell>
                            <TableCell align="right">₹{row.inCartQty * row.price} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <h3>Total Bill: ₹{totalAmt} </h3>
            <button onClick={handlePayment}  >
                <Razorpay  amt={totalAmt} />
            </button>
        </>
    )
}
export default OrderSummary
