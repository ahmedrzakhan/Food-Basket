import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct } from "../../Redux/product/action";
import styles from "./CardContainer.module.css";
import { TiShoppingCart } from "react-icons/ti";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function CategoryCard(props) {
  const data = useSelector((state) => state.product.categoryData);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { categories } = params;

  useEffect(() => {
    dispatch(getCategoryProduct(categories));
  }, [dispatch, categories]);

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
                      <p style={{ textAlign: "center " }}>
                        {" "}
                        {items.product["title"]}{" "}
                      </p>
                      <p></p>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span className={styles.mrpBorder}>MRP ₹</span>
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
      </Container>
    </>
  );
}

export default CategoryCard;
