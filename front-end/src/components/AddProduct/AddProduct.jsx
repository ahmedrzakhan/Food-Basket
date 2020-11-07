import React from "react"
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Grid } from "@material-ui/core";
import styles from "./AddProduct.module.css"
import { TiShoppingCart } from "react-icons/ti";
import dataArr from "./testData"

function AddProduct(props)
{
    const [counter, setCounter] = React.useState(0)
    const [hideFlag, setHideFlag] = React.useState(false)
    let storageArr = []

    console.log(props)
    // console.log(dataArr)

    let prodId = props.id

    const handleAddClick = () => {

        setCounter(counter => counter + 1)
        console.log(counter)

        setHideFlag(true)

        let reqProd = dataArr.find(item => prodId === item.id)

        // storageArr = JSON.parse(localStorage.getItem("all-prods")) || []

        // storageArr.push(reqProd)
        reqProd.presentInCart = true
        reqProd.inCartQty =  1

        if(reqProd.presentInCart === true)
        {
            localStorage.setItem(`${reqProd.id}`, JSON.stringify(reqProd))
        }
            
        

        console.log(reqProd, "REQ PROD")
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

        
        if(JSON.parse(localStorage.getItem(`${prodId}`)).inCartQty === 0)
        {
            // let itemToRemove = JSON.parse(lo)
            reqProdToDec = JSON.parse(localStorage.getItem(`${prodId}`))

            reqProdToDec.presentInCart = false

            localStorage.setItem(`${prodId}`, JSON.stringify(reqProdToDec))
            localStorage.removeItem(`${reqProdToDec.id}`)
            return

        }
        localStorage.setItem(`${prodId}`, JSON.stringify(reqProdToDec))
    }

    for(let i=0; i<=localStorage.length; i++)
    {
        console.log(localStorage[i])
    }
    return(
        <>
            <Box style={{margin: "50px"}}>
                <div style={{clear: "both"}}></div>
                {
                    hideFlag && counter>0?
                    <Grid container>
                        <span className={styles.AddDecBtn} onClick={handleCounterDec}>-</span>
                        <span className={styles.AddDecBtn}>{counter}</span>
                        <span className={styles.AddDecBtn} onClick={handleCounterAdd}>+</span>
                    </Grid>
                    :
                    <Button variant="contained" onClick={handleAddClick} color="primary"> 
                    <TiShoppingCart
                        style={{
                        color: "white",
                        marginRight: "2px",
                        marginTop: "-2px",
                        }}
                    /> Add
                  </Button>
                }
            </Box>

            

            
        </>
    )
}

export default AddProduct