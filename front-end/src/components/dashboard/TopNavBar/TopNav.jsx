import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FormHelperText from "@material-ui/core/FormHelperText";

import { registerUser, loginUser } from "../../Redux/auth/action";

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
            width: "470px",
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
    const [logEmail, setLogEmail] = useState("");
    const [logPassword, setLogPassword] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [userOtp, setUserOtp] = useState("");

    const dispatch = useDispatch();
    const { isError, message, validation } = useSelector((state) => state.auth);
    const handleLogin = () => {
        dispatch(loginUser({ logEmail, logPassword }));
    };
    const handleRegister = () => {
        let obj = {
            email: regEmail,
            password: regPassword,
            userOTP: userOtp,
            username: regEmail,
            mobile_no: mobile,
        };
        console.log(obj)
        dispatch(registerUser(obj));
        alert("user successfully logged in");
    };
    const handleOtp = async () => {
        setRegister(false);
        setLogin(false);
        setOtp(true);
        if (mobile.length < 10 || isNaN(Number(mobile))) {
            return;
        }
        const data = { mobileNumber: mobile };
        var config = {
            method: "post",
            url: "http://localhost:5000/api/user/send-otp",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };
        try {
            const result = await axios(config);
            console.log(result.data);
        } catch (err) {
            console.log(err);
        }
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

                {register ? (
                    <Box classes={{ root: styles.login }}>
                        <Box classes={{ root: styles.inputBox }}>
                            <Box classes={{ root: styles.outerBox }}>
                                <PhoneAndroidOutlinedIcon className={classes.phone} />
                                <input

                                    name="mobile"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    placeholder="Mobile No."
                                />
                            </Box>

                            <button onClick={handleOtp} className={styles.btnLogin}>
                                Continue
              </button>
                            <Button
                                className={styles.close}
                                onClick={() => {
                                    setRegister(false);
                                    setLogin(false);
                                    setOtp(false);
                                }}
                            >
                                {" "}
                                <img
                                    src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png"
                                    alt="close"
                                ></img>
                            </Button>
                        </Box>
                    </Box>
                ) : login ? (
                    <Box classes={{ root: styles.login }}>
                        <Box classes={{ root: styles.inputBox }}>
                            <Box classes={{ root: styles.outerBox }}>
                                <EmailIcon className={classes.phone} />
                                <input
                                    name="logEmail"
                                    value={logEmail}
                                    onChange={(e) => setLogEmail(e.target.value)}
                                    className={styles.otpEmail}
                                    placeholder="Email Address"
                                />
                            </Box>
                            <Box classes={{ root: styles.outerBox }}>
                                <VpnKeyIcon className={classes.phone} />
                                <input
                                    type="password"
                                    name="logPassword"
                                    value={logPassword}
                                    onChange={(e) => setLogPassword(e.target.value)}
                                    className={styles.inputEmail}
                                    placeholder="Set Password"
                                />
                            </Box>
                            <button onClick={() => handleLogin} className={styles.btnLogin}>
                                Login
              </button>
                            <Button>Login Via OTP</Button>
                            <Button
                                classes={{ root: styles.close }}
                                onClick={() => {
                                    setRegister(false);
                                    setLogin(false);
                                    setOtp(false);
                                }}
                            >
                                {" "}
                                <img
                                    src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png"
                                    alt="close"
                                ></img>
                            </Button>
                        </Box>
                        {isError && (
                            <Typography
                                variant="subtitle1"
                                component="h3"
                                gutterBottom
                                color="error"
                            >
                                {message}
                            </Typography>
                        )}
                    </Box>
                ) : otp ? (
                    <Box classes={{ root: styles.login }}>
                        <Box classes={{ root: styles.otpBox }}>
                            <Box classes={{ root: styles.outerBox }}>
                                <PhoneAndroidOutlinedIcon className={classes.phone} />
                                <input placeholder="Mobile No." />
                            </Box>
                            <input
                                name="otp"
                                value={userOtp}
                                onChange={(e) => setUserOtp(e.target.value)}
                                className={styles.inputEmail}
                                placeholder="Enter OTP"
                            />

                            <Box classes={{ root: styles.outerBox }}>
                                <EmailIcon className={classes.phone} />
                                <input
                                    name="regEmail"
                                    value={regEmail}
                                    onChange={(e) => setRegEmail(e.target.value)}
                                    className={styles.otpEmail}
                                    placeholder="Email Address"
                                />
                                {/* {validation && validation.split(" ")[0] === '"email"' && (
                                    <FormHelperText error>{validation}</FormHelperText>
                                )} */}
                            </Box>
                            <Box classes={{ root: styles.outerBox }}>
                                <VpnKeyIcon className={classes.phone} />
                                <input
                                    type="password"
                                    name="regPassword"
                                    value={regPassword}
                                    onChange={(e) => setRegPassword(e.target.value)}
                                    className={styles.inputEmail}
                                    placeholder="Set Password"
                                />
                                {validation && validation.split(" ")[0] === '"password"' && (
                                    <FormHelperText error>{validation}</FormHelperText>
                                )}
                            </Box>
                            <button onClick={handleRegister} className={styles.btnLogin}>
                                Register
              </button>
                            <Button
                                classes={{ root: styles.close }}
                                onClick={() => {
                                    setRegister(false);
                                    setLogin(false);
                                    setOtp(false);
                                }}
                            >
                                {" "}
                                <img
                                    src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png"
                                    alt="close"
                                ></img>
                            </Button>
                        </Box>
                        {isError && (
                            <Typography
                                variant="subtitle1"
                                component="h3"
                                gutterBottom
                                color="error"
                            >
                                {message}
                            </Typography>
                        )}
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
                                    <p>Indian Grocery</p>
                                    <p>Fruits & Vegetables </p>
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
