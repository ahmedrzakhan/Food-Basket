import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from "./CardContainer.module.css";
import { TiShoppingCart } from "react-icons/ti";
import Grid from '@material-ui/core/Grid';

function CardContainer(props) {
  const [data, setData] = useState([]);
  const params = useParams()
  const history = useHistory()
  const { sub_category } = params

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const config = {
      method: "get",
      url:
        `http://localhost:5000/api/categories/sub-category?sub_category=${sub_category}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const result = await axios(config);
      setData(result.data);
    } catch (err) {
      console.log("err", err);
    }
  };


  const handleClick = () => {
    alert("Pop");
  };
  console.log(data)
  return (
    <>
      <Grid container >
        {data && data.map((item, i) => {
          return (
            <>
              <Grid onClick={() => history.push(`/dummy/${item._id}`)} key={i} container item xs={12} lg={3} md={4} sm={12} >
                <div className={styles.productCard}>
                  <img height="230px" src={item.product["url"]} alt={item.product["title"]} />                     <div>
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
                    <span onClick={handleClick} className={styles.AddBtn}>
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
                </div>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}

export default CardContainer;