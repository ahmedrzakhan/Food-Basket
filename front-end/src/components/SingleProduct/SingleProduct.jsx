import React from "react"
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import { Grid } from "@material-ui/core";
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import styles from "./SingleProduct.module.css"
import { TiShoppingCart } from "react-icons/ti";

const singleProductSample = { name: "Apple Royal Gala - New Zealand",imageLink: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b05894c9-bafd-45af-95bf-30fe304d242c_425x425.jpg" , qty: "1kg", price: 280, description: `Harvested from mid February to late March, 
these tasty apples are developped and bred in New Zealand. Sweet, fragrant, crisp. A crunchy apple.
Red striped with creamy yellow background. 
This is an aromatically – sweet apple. Popular for eating and salads.
#Developed and Bred in New Zealand
#Natural Product` }

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    marginLeftSide: {
        margin: 30
    },
    blackFont:{
        color: "black"
    },
    borderBottomOnly:{
        borderBottom: "1px solid black"
    }
  }));

function SingleProduct()
{
    const classes = useStyles()
    const handleClick = (e) =>{
        alert("You clicked a breadcrumb")
      }

    const handleAddClick = () =>{
        alert("Clicked on Add button")
    }  

    return(
        <>
            <div style={{ marginTop: "30px" ,clear: "both" }}></div>
            <Box className={classes.marginLeftSide}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Home
                    </Link>
                    <Link color="inherit" href="/fruits-vegetables" onClick={handleClick}>
                        Fruits & vegetables
                    </Link>
                    <Typography color="inherit"> {singleProductSample.name} </Typography>
                </Breadcrumbs>
                <Grid container>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <img src={singleProductSample.imageLink} alt="product image" />
                        <div>
                            <img
                                height="20px"
                                src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/8ab57ed4-47e0-426a-8382-f4c89b11826a.png"
                                alt="delivery"
                            />{" "}
                            <span
                                style={{
                                color: "#880033",
                                fontSize: "15px",
                                fontWeight: "600",
                                }}
                            >
                                DELIVERY IN 60 MINUTES{" "}
                            </span>
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <h2>{singleProductSample.name} </h2>
                        <small>Share  </small> <span className={classes.blackFont} ><FaFacebookF/> </span> <span className={classes.blackFont}><FaTwitter/> </span>
​
                        <p>
                            Product of: New Zealand/USA <br/>
                            Royal Gala was developed in New Zealand and is a red sport of the Gala variety.
                        </p>
​
                        <Box>
                        <div style={{ display: "flex" }}>
                        <span className={styles.mrpBorder}>MRP ₹{singleProductSample.price} </span>
                            <span onClick={handleAddClick} className={styles.AddBtn}>
                                <TiShoppingCart
                                style={{
                                    color: "white",
                                    marginRight: "2px",
                                    marginTop: "-2px",
                                }}
                                />
                                Add
                            </span>
                        </div>
                        </Box>
                        <Box className={classes.borderBottomOnly}>
                            <small > <i> {`(Inclusive of all taxes)`} </i> </small>
                        </Box>
​
                        <p>Know More</p>
                        <p>{singleProductSample.description} </p>
                    </Grid>
                </Grid>
            </Box>
​
        </>
    )
}

export default SingleProduct