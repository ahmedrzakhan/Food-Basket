import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

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
            marginLeft: "2%"
        },
        [theme.breakpoints.down("md")]: {
            width: "470px",
            alignItems: "center",
            marginLeft: "2%"
        },

    },
    topDiv: {
        backgroundColor: "#c80066",
        color: "white",
        display: "block",
        height: "60px",
        top: 0,
        [theme.breakpoints.down("md")]: {
            height: "120px",
        },
    },
    login: {
        [theme.breakpoints.down("md")]: {
            display: "none",
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

                {register ? (
                    <Box classes={{ root: styles.login }}>
                        <Box classes={{ root: styles.inputBox }}>
                            <input placeholder="Mobile Number" />
                            <button className={styles.btnLogin}>Continue</button>
                            <Button
                                className={styles.close}
                                onClick={() => setRegister(false)}
                            >
                                {" "}
                                <img
                                    src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png"
                                    alt="close"
                                ></img>
                            </Button>
                        </Box>
                    </Box>
                ) : (
                        ""
                    )}
                {login ? (
                    <Box classes={{ root: styles.login }}>
                        <Box classes={{ root: styles.inputBox }}>
                            <input
                                className={styles.inputEmail}
                                placeholder="Email Address"
                            />
                            <input className={styles.inputEmail} placeholder="Password" />
                            <button className={styles.btnLogin}>Login</button>
                            <Button>Login Via OTP</Button>
                            <Button
                                classes={{ root: styles.close }}
                                onClick={() => setLogin(false)}
                            >
                                {" "}
                                <img
                                    src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png"
                                    alt="close"
                                ></img>
                            </Button>
                        </Box>
                    </Box>
                ) : (
                        ""
                    )}
                <Box>
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
                                Online Slots Availability
              </Link>
                            <Link className={styles.Toplink} to="/">
                                {" "}
                Fresh & Fast
              </Link>
                            <button
                                onClick={() => setLogin(true)}
                                className={styles.topRight}
                            >
                                Register
              </button>
                            <button
                                onClick={() => setRegister(true)}
                                className={styles.topRight}
                            >
                                Login
              </button>
                        </Box>
                        <Box>
                            {/* <Box className={classes.root}>
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
                            </Box> */}
                            <Box classes={{ root: styles.hoverDivSearch }} className={classes.root}>
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
                                    <p >Indian Grocery</p>
                                    <p >Fruits & Vegetables </p>
                                    <p>Snacks </p>
                                </Box>
                            </Box>

                            <Box className={classes.newBox}>
                                <Box>
                                    <StarIcon classes={{ root: styles.starCart }} />
                                    <Divider className={classes.divider} orientation="vertical" />
                                    <ShoppingCartOutlinedIcon
                                        classes={{ root: styles.starCart }}
                                    />
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
