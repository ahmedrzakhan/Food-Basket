import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from "./TestGetProduct.module.css";
import { TiShoppingCart } from "react-icons/ti";
import Grid from '@material-ui/core/Grid';
import AddProduct from "./AddProduct";
import dataArr from "./testData"

function TestGetProduct(props) {
//   const [data, setData] = useState([]);
  const params = useParams()
  const history = useHistory()
  const { sub_category } = params

  let data = dataArr
  
//   onClick={() => history.push(`/dummy/${item._id}`)}
  console.log(data)
  return (
    <>
      <Grid container >
        {data && data.map((item, i) => {
          return (
            <>
              <Grid  key={i} container item xs={12} lg={3} md={4} sm={12} >
                <div className={styles.productCard}>
                  <img height="230px" src={item.product["url"]} alt={item.product["title"]} />                     
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
                  <p> {item.product["title"]} </p>
                  <p> {item.qty}</p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span className={styles.mrpBorder}>MRP ₹{item.price} </span>
                    <AddProduct id={item.id} />
                  </div>
                </div>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}

export default TestGetProduct;