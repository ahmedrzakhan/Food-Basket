import React from "react";
import styles from "./CardContainer.module.css";
import { TiShoppingCart } from "react-icons/ti";
import Grid from '@material-ui/core/Grid';

function CardContainer(props) {
  const handleClick = () => {
    alert("Pop");
  };

  return (
    <>
        <Grid container >
      {props.foodItemDetails.map((item) => {
        return (
          <>
            <Grid container item xs={12} lg={3} md={4} sm={12} >
                <div className={styles.productCard}>
                <img
                  height="250px"
                  src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b05894c9-bafd-45af-95bf-30fe304d242c_425x425.jpg"
                  alt="fruits and veggies"
                />
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
                <p> {item.name} </p>
                <p> {item.qty} </p>
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
