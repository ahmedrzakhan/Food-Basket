import React, { useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getSubcategoryProduct } from '../../Redux/product/action'
import styles from "./CardContainer.module.css";
import { TiShoppingCart } from "react-icons/ti";
import Grid from '@material-ui/core/Grid';

function CardContainer(props) {

  const data = useSelector(state => state.product.subCategoryData)
  const dispatch = useDispatch()
  const params = useParams()
  const history = useHistory()
  const { sub_category } = params

  useEffect(() => {
    dispatch(getSubcategoryProduct(sub_category))
  }, [dispatch, sub_category]);




  const handleClick = () => {
    alert("Pop");
  };

  return (
    <>
      <Grid container >
        {data && data.map((item, i) => {
          return (
            <>
              <Grid key={i} container item xs={12} lg={3} md={4} sm={12} >
                <div className={styles.productCard}>
                  <img onClick={() => history.push(`/product/${item._id}`)} height="230px" src={item.product["image"]} alt={item.product["title"]} />                     <div>
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