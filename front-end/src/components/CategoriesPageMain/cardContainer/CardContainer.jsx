import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSubcategoryProduct } from "../../Redux/product/action";
import styles from "./CardContainer.module.css";
import { TiShoppingCart } from "react-icons/ti";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AddProduct from "./../../AddProduct/AddProduct"
import { Typography } from "@material-ui/core";


function CardContainer(props) {
  const data = useSelector((state) => state.product.subCategoryData);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { sub_category } = params;


  useEffect(() => {
    dispatch(getSubcategoryProduct(sub_category));
  }, [dispatch, sub_category]);

  const handleClick = () => {
    alert("Pop");
  };

  return (
    <>
      <Container>
        <Grid m={2} container>
          {data &&
            data.map((items, i) => {
              return (
                <>
                  <Grid
                    m={2}
                    key={i}
                    container
                    item
                    xs={12}
                    lg={3}
                    md={6}
                    sm={6}
                  >
                    <div className={styles.productCard}>
                      <img
                        onClick={() => history.push(`/product/${items._id}`)}
                        height="230px"
                        src={items.product["image"]}
                        alt={items.product["title"]}
                      />{" "}
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
                      <p style={{textAlign:"center "}}> {items.product["title"]}  </p>
                   
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span className={styles.mrpBorder}>MRP ₹ {items.product.price}
                    </span>
                      <AddProduct id={items._id} />

                  </div>
                </div>
              </Grid>
            </>
          );
        })}
        </Grid>
      </Container>
    </>
  );
}

export default CardContainer;
