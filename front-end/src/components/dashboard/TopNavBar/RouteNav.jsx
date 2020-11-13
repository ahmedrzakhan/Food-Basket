import React from "react";
import Box from "@material-ui/core/Box";
import styles from "./routeNav.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import { Link } from "react-router-dom";

function RouteNav() {
  return (
    <>
      <Box classes={{ root: styles.routes }}>
        <Box classes={{ root: styles.col1 }}>
          <Box classes={{ root: styles.hoverDiv }}>
            <span style={{ color: "#c94267", background: "#f3f3f3" }}>
              SHOP BY CATEGORY
            </span>
            <ArrowDropDownIcon classes={{ root: styles.arrow }} />

            <Box classes={{ root: styles.innerHoverDiv }} >
              <div >
                <div className={styles.box}>
                  <Link className={styles.shop} to="/home/Indian Grocery">
                    Indian Grocery
                  </Link>
                </div>
                <div>
                  <ChevronRightOutlinedIcon
                    classes={{ root: styles.chevron }}
                  />
                </div>
              </div>
              <div>
                <div className={styles.box}>
                  <Link
                    className={styles.shop}
                    to="/home/Fruits-and-Vegetables"
                  >
                    {" "}
                    Fruits and Vegetables{" "}
                  </Link>
                </div>
                <div>
                  <ChevronRightOutlinedIcon
                    classes={{ root: styles.chevron }}
                  />
                </div>
              </div>
              <div>
                <div className={styles.box}>
                  <Link
                    className={styles.shop}
                    to="/home/Meats, Seafood and Eggs"
                  >
                    {" "}
                    Meats, Seafood and Eggs{" "}
                  </Link>
                </div>
                <div>
                  <ChevronRightOutlinedIcon
                    classes={{ root: styles.chevron }}
                  />
                </div>
              </div>
              <div>
                <div className={styles.box}>
                  <Link
                    className={styles.shop}
                    to="/home/Breakfast, Dairy and Bakery"
                  >
                    {" "}
                    Breakfast, Dairy and Bakery{" "}
                  </Link>
                </div>
                <div>
                  <ChevronRightOutlinedIcon
                    classes={{ root: styles.chevron }}
                  />
                </div>
              </div>
            </Box>
          </Box>
        </Box>

        <Box classes={{ root: styles.col }}>Past purchases</Box>
        <Box classes={{ root: styles.col }}>Brands</Box>
      </Box>
    </>
  );
}

export default RouteNav;
