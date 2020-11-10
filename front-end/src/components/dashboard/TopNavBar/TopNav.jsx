import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, InputBase, Divider, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import StarIcon from "@material-ui/icons/Star";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import LoginReg from "./LoginReg";
import { logout } from "../../Redux/auth/action";

const useStyles = makeStyles((theme) => ({
  root: {
    //padding: '1px 1px',
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: 900,
    height: "36px",
    border: "1px solid #AAACA9",
    float: "left",
    borderRadius: "8px",
    borderRight: "0px",
    [theme.breakpoints.up("md")]: {
      width: "900px",
      alignItems: "center",
      marginLeft: "2%",
    },
    [theme.breakpoints.down("md")]: {
      width: "600px",
      alignItems: "center",
      marginLeft: "2%",
      border: "1px solid blue",
    },
    [theme.breakpoints.down("sm")]: {
      width: "350px",
      alignItems: "center",
      marginLeft: "2%",
    },
  },
  topDiv: {
    backgroundColor: "#c80066",
    color: "white",
    display: "block",
    height: "60px",
    top: 0,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "90px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "120px",
      width: "100%",
    },
  },
  login: {
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  iconButton: {
    padding: "0.2%",
    height: "36px",
    background: "#7CCB55 ",
    top: 0,
    borderRadius: "8px",
  },
  iconColor: {
    color: "white",
    textAlign: "center",
  },
  phone: {
    color: "#c80066",
    paddingTop: "1%",
    paddingLeft: "2%",
  },

  divider: {
    height: 18,
    margin: 4,
    float: "left",
  },
  newBox: {
    float: "right",
    marginRight: "2%",
    width: "7%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
function TopNav() {
  const classes = useStyles();
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [otp, setOtp] = useState(false);
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const userData = JSON.parse(localStorage.getItem("user"));
  const status = JSON.parse(localStorage.getItem("status"));
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Box>
        <Box className={classes.topDiv}>
          <Box align="left" classes={{ root: styles.innerDiv }}>
            Now accepting Wine & Beer orders (Select stores, Mumbai Only).
            Delivery timings 10.00 AM to 6:00 PM subject to verification of
            permit and age by delivery person. Age criteria 21+ for mild beer
            and 25+ for strong beer and wine.
          </Box>
        </Box>
        <LoginReg
          login={login}
          setLogin={setLogin}
          register={register}
          setRegister={setRegister}
          otp={otp}
          setOtp={setOtp}
        />

        <Box xs={12} sm={6} md={3}>
          <Box classes={{ root: styles.logo }}>
            <Link className={styles.photo} to="/">
              <img
                src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2"
                alt="logo"
              />
            </Link>
          </Box>

          <Box>
            <Box className={classes.login} m={1}>
              <Link className={styles.Toplink} to="/">
                Store Locator
              </Link>
              <Link className={styles.Toplink} to="/freshFast">
                {" "}
                Fresh & Fast
              </Link>
              {status ? (
                <>
                  <div className={styles.hoverUser}>
                    {userData.username}
                    <div className={styles.innerHoverUser}>
                      <Button onClick={handleLogout}>LogOut</Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setRegister(true);
                      setLogin(false);
                    }}
                    className={styles.topRight}
                  >
                    Register
                  </button>
                  <button
                    onClick={() => {
                      setLogin(true);
                      setRegister(false);
                    }}
                    className={styles.topRight}
                  >
                    Login
                  </button>
                </>
              )}
            </Box>

            <Box>
              <Box
                classes={{ root: styles.hoverDivSearch }}
                className={classes.root}
              >
                <InputBase
                  className={classes.input}
                  placeholder="Start Shopping..."
                  inputProps={{ "aria-label": "start shopping" }}
                />
                <Box className={classes.iconButton}>
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon className={classes.iconColor} />
                  </IconButton>
                </Box>

                <Box classes={{ root: styles.innerHoverDivSearch }}>
                  <p className={styles.trend}>Trending Searches</p>
                  <p>
                    <Link
                      to="/home/Fruits-and-Vegetables/Exotic-Vegetables"
                      className={styles.afterTrend}
                    >
                      Exotic Vegetables
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/home/Fruits-and-Vegetables/Daily-Vegetables"
                      className={styles.afterTrend}
                    >
                      Daily Vegetables{" "}
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/home/Indian Grocery/Daily Essentials"
                      className={styles.afterTrend}
                    >
                      Daily essentials{" "}
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/home/Indian Grocery/Milk and Cream"
                      className={styles.afterTrend}
                    >
                      Milk and Cream{" "}
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/home/Indian Grocery/Cooking Pastes and sauces"
                      className={styles.afterTrend}
                    >
                      Cooking Pastes and Sauces
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/home/Meats, Seafood and Eggs/Cold Cuts and Sausages"
                      className={styles.afterTrend}
                    >
                      Cold Cuts and Sausages{" "}
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/home/Meats, Seafood and Eggs/Frozen"
                      className={styles.afterTrend}
                    >
                      Frozen{" "}
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/home/Breakfast, Dairy and Bakery/Bakery"
                      className={styles.afterTrend}
                    >
                      Bakery{" "}
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/home/Breakfast, Dairy and Bakery/Bars and Others"
                      className={styles.afterTrend}
                    >
                      Bars and Others{" "}
                    </Link>
                  </p>
                </Box>
              </Box>

              <Box className={classes.newBox}>
                <Box>
                  <StarIcon classes={{ root: styles.starCart }} />
                  <Divider className={classes.divider} orientation="vertical" />
                  <Link to="/cart">
                    <ShoppingCartOutlinedIcon
                      classes={{ root: styles.starCart }}
                    />
                  </Link>
                  <div className={styles.myCart}>
                    <span className={styles.value}>0</span>
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default TopNav;
