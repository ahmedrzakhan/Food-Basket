import React,{ useEffect }  from "react"
import Box from '@material-ui/core/Box';
import { Grid } from "@material-ui/core";
import styles from "./AddProduct.module.css"
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {getSubcategoryProduct} from "./../Redux/product/action"
import {addProd, subProd} from "./../Redux/cart/actions"

function AddProduct(props)
{
    const [counter, setCounter] = React.useState(0)
    const [hideFlag, setHideFlag] = React.useState(false)
    const dataArr = useSelector(state => state.product.subCategoryData)
    const dispatch = useDispatch()
    

    useEffect(() => {
        if(props.subCategory)
        {
            dispatch(getSubcategoryProduct(props.subCategory));
        }
      }, [dispatch, props.subCategory]);
    

    let prodId = props.id

    let itemFromLocalStorage = JSON.parse(localStorage.getItem(`${prodId}`)) || ""
    
   
    const handleAddClick = () => {
      
        setCounter(counter => counter + 1)

        setHideFlag(true)

        let reqitem = dataArr.find(item => prodId === item._id) 
        console.log(dataArr)


        let reqProd = {
                id: reqitem._id || prodId,
                title: reqitem.product.title, 
                imageLink: reqitem.product.image, 
                category: reqitem.category, 
                sub_ctg: reqitem.sub_category,
                price: reqitem.product.price,
                inCartQty: 0 ,
                presentInCart: false
            }

        
        reqProd.presentInCart = true
        reqProd.inCartQty =  1

        dispatch(addProd(reqProd.inCartQty))
        if(reqProd.presentInCart === true)
        {
            localStorage.setItem(`${reqProd.id}`, JSON.stringify(reqProd))
        }
            
    }

    const handleCounterAdd = () => {
        let reqProdToAdd = JSON.parse(localStorage.getItem(`${prodId}`))

        setCounter(counter => counter + 1)

        reqProdToAdd.inCartQty = reqProdToAdd.inCartQty + 1

        dispatch(addProd(reqProdToAdd.inCartQty))
        localStorage.setItem(`${prodId}`, JSON.stringify(reqProdToAdd))
    }

    const handleCounterDec = () => {

        let reqProdToDec = JSON.parse(localStorage.getItem(`${prodId}`))

        setCounter(counter => counter - 1)

        reqProdToDec.inCartQty = reqProdToDec.inCartQty - 1

        
        if(reqProdToDec.inCartQty === 0)
        {
            reqProdToDec = JSON.parse(localStorage.getItem(`${prodId}`))

            reqProdToDec.presentInCart = false

            localStorage.setItem(`${prodId}`, JSON.stringify(reqProdToDec))
            localStorage.removeItem(`${prodId}`)
            return

        }
        localStorage.setItem(`${prodId}`, JSON.stringify(reqProdToDec))

        dispatch(subProd(reqProdToDec.inCartQty))
    }

   
    return(
        <>
            <Box>
                <div style={{clear: "both"}}></div>
                {
                    hideFlag && counter>0 ||itemFromLocalStorage.inCartQty > 0?
                    <Grid container>
                        <span className={styles.AddDecBtn} onClick={handleCounterDec}>-</span>
                        <span className={styles.AddDecBtn}>{itemFromLocalStorage.inCartQty}</span>
                        <span className={styles.AddDecBtn} onClick={handleCounterAdd}>+</span>
                    </Grid>
                    :
                    <Box className={styles.AddBtn}  onClick={handleAddClick} style={{background: "#92BE4B", color: "white"}}> 
                    <TiShoppingCart
                        style={{
                        color: "white",
                        marginRight: "2px",
                        marginTop: "-2px",
                        }}
                    /> <span style={{color: "white"}}>ADD </span> 
                  </Box>
                }
            </Box>
        </>
    )
}

export default AddProduct