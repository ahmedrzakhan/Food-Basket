import React from "react"
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Grid } from "@material-ui/core";
import styles from "./AddProduct.module.css"
import { TiShoppingCart } from "react-icons/ti";
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
// import dataArr from "./testData"

function AddProduct(props)
{
    const [counter, setCounter] = React.useState(0)
    const [hideFlag, setHideFlag] = React.useState(false)
    const dataArr = useSelector(state => state.product.subCategoryData)
    let storageArr = []
    const dispatch = useDispatch()
    const params = useParams()

    const { sub_category } = params
    console.log(sub_category)
    console.log(props.id, "PROPS")
    // console.log(dataArr)
    console.log(dataArr)

    let prodId = props.id

    let itemFromDataArr = dataArr.find(item => prodId === item._id)
    let itemFromLocalStorage = JSON.parse(localStorage.getItem(`${prodId}`)) || ""
    
    console.log(itemFromDataArr, "ITEM FROM DATA ARR")
    console.log(itemFromLocalStorage, "ITEM FROM LOCAL STORAGE")
    
    const handleAddClick = () => {

        setCounter(counter => counter + 1)
        console.log(counter)

        setHideFlag(true)

        let reqitem = dataArr.find(item => prodId === item._id ) 

        console.log(reqitem)

        let reqProd = {
                id: reqitem._id, 
                title: reqitem.product.title, 
                imageLink: reqitem.product.image, 
                category: reqitem.category, 
                // price: reqitem.price.map(item => item),
                inCartQty: 0 ,
                presentInCart: false
            }

        console.log(reqProd)    

        // storageArr = JSON.parse(localStorage.getItem("all-prods")) || []

        // storageArr.push(reqProd)
        reqProd.presentInCart = true
        reqProd.inCartQty =  1

        if(reqProd.presentInCart === true)
        {
            localStorage.setItem(`${reqProd.id}`, JSON.stringify(reqProd))
        }
            
    }

    const handleCounterAdd = () => {


        let reqProdToAdd = JSON.parse(localStorage.getItem(`${prodId}`))


        console.log(reqProdToAdd, "req prod to add")

        setCounter(counter => counter + 1)

        reqProdToAdd.inCartQty = reqProdToAdd.inCartQty + 1

        localStorage.setItem(`${prodId}`, JSON.stringify(reqProdToAdd))
    }

    const handleCounterDec = () => {

        let reqProdToDec = JSON.parse(localStorage.getItem(`${prodId}`))

        console.log(reqProdToDec, "req prod to dec")

        setCounter(counter => counter - 1)

        reqProdToDec.inCartQty = reqProdToDec.inCartQty - 1

        
        if(reqProdToDec.inCartQty == 0)
        {
            // let itemToRemove = JSON.parse(lo)
            reqProdToDec = JSON.parse(localStorage.getItem(`${prodId}`))

            reqProdToDec.presentInCart = false

            localStorage.setItem(`${prodId}`, JSON.stringify(reqProdToDec))
            localStorage.removeItem(`${prodId}`)
            console.log("REMOVED", prodId)
            return

        }
        localStorage.setItem(`${prodId}`, JSON.stringify(reqProdToDec))
    }

    // for(let i=0; i<=localStorage.length; i++)
    // {
    //     console.log(localStorage[i])
    // }
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
                    <Button variant="contained" onClick={handleAddClick} style={{background: "#92BE4B", color: "white"}}> 
                    <TiShoppingCart
                        style={{
                        color: "white",
                        marginRight: "2px",
                        marginTop: "-2px",
                        }}
                    /> <span style={{color: "white"}}>Add </span> 
                  </Button>
                }
            </Box>

            

            
        </>
    )
}

export default AddProduct