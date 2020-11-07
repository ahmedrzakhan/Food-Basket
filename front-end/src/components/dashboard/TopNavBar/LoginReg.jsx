import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {
    FormHelperText,
    Button,
    Typography,
    Box,
    InputBase,
} from "@material-ui/core";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import { registerUser, loginUser } from "../../Redux/auth/action";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const useStyles = makeStyles((theme) => ({
    phone: {
        color: "#c80066",
        paddingTop: "1%",
        paddingLeft: "2%",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}));

function LoginReg({ login, setLogin, register, setRegister, otp, setOtp }) {
    const classes = useStyles();
    const [state, setState] = useState({
        logEmail: "",
        logPassword: "",
        regEmail: "",
        regPassword: "",
        mobile: "",
        userOtp: "",
    });
    const {
        userOtp,
        regEmail,
        mobile,
        regPassword,
        logEmail,
        logPassword,
    } = state;
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

        dispatch(registerUser(obj));
        alert("user successfully logged in");
    };
    const handleOtp = async () => {
        setRegister(false);
        setLogin(false);
        setOtp(true);
        // if (mobile.length < 10 || isNaN(Number(mobile))) {
        //     return
        // }
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
    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    return (
        <>
            {register ? (
                <Box classes={{ root: styles.login }}>
                    <Box classes={{ root: styles.inputBox }}>
                        <Box classes={{ root: styles.outerBox }}>
                            <PhoneAndroidOutlinedIcon className={classes.phone} />
                            <InputBase
                                classes={{ root: styles.inn }}
                                name="mobile"
                                value={mobile}
                                onChange={handleChange}
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
                            <InputBase
                                type="text"
                                name="logEmail"
                                value={logEmail}
                                onChange={handleChange}
                                classes={{ root: styles.inn }}
                                placeholder="Enter Email"
                            />
                        </Box>
                        <Box classes={{ root: styles.outerBox }}>
                            <VpnKeyIcon className={classes.phone} />
                            <InputBase
                                type="password"
                                name="logPassword"
                                value={logPassword}
                                onChange={handleChange}
                                classes={{ root: styles.inn }}
                                placeholder="Set Password"
                            />
                        </Box>
                        <button onClick={() => handleLogin} className={styles.btnLogin}>
                            Login
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
                </Box>
            ) : otp ? (
                <Box classes={{ root: styles.login }}>
                    <Box classes={{ root: styles.inputBox }}>
                        <Box classes={{ root: styles.outerBox }}>
                            <PhoneAndroidOutlinedIcon className={classes.phone} />
                            <InputBase
                                name="mobile"
                                value={mobile}
                                onChange={handleChange}
                                classes={{ root: styles.inn }}
                            />
                        </Box>
                        <input
                            name="userOtp"
                            value={userOtp}
                            onChange={handleChange}
                            className={styles.inputEmail}
                            placeholder="Enter OTP"
                        />
                        <Box classes={{ root: styles.outerBox }}>
                            <EmailIcon className={classes.phone} />
                            <InputBase
                                name="regEmail"
                                value={regEmail}
                                onChange={handleChange}
                                classes={{ root: styles.inn }}
                                placeholder="Email Address"
                            />
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
                </Box>
            ) : (
                            ""
                        )}
        </>
    );
}
export default LoginReg;

// {
//     register ? (
//         <Box classes={{ root: styles.login }}>
//             <Box classes={{ root: styles.inputBox }}>
//                 <Box classes={{ root: styles.outerBox }}>
//                     <PhoneAndroidOutlinedIcon className={classes.phone} />
//                     <input
//                         name="mobile"
//                         value={mobile}
//                         onChange={handleChange}
//                         placeholder="Mobile No."
//                     />
//                 </Box>

//                 <button onClick={handleOtp} className={styles.btnLogin}>
//                     Continue
//             </button>
//                 <Button
//                     className={styles.close}
//                     onClick={() => {
//                         setRegister(false);
//                         setLogin(false);
//                         setOtp(false);
//                     }}
//                 >
//                     {" "}
//                     <img
//                         src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png"
//                         alt="close"
//                     ></img>
//                 </Button>
//             </Box>
//         </Box>
//     ) : login ? (
//         <Box classes={{ root: styles.login }}>
//             <Box classes={{ root: styles.inputBox }}>
//                 <Box classes={{ root: styles.outerBox }}>
//                     <EmailIcon className={classes.phone} />
//                     {/* <input
//                                 name="logEmail"
//                                 value={logEmail}
//                                 onChange={handleChange}
//                                 className={styles.otpEmail}
//                                 placeholder="Email Address"
//                             /> */}
//                 </Box>
//                 <Box classes={{ root: styles.outerBox }}>
//                     <VpnKeyIcon className={classes.phone} />
//                     {/* <input
//                                 type="password"
//                                 name="logPassword"
//                                 value={logPassword}
//                                 onChange={handleChange}
//                                 className={styles.inputEmail}
//                                 placeholder="Set Password"
//                             /> */}
//                 </Box>
//                 <button onClick={() => handleLogin} className={styles.btnLogin}>
//                     Login
//             </button>
//                 <Button>Login Via OTP</Button>
//                 <Button
//                     classes={{ root: styles.close }}
//                     onClick={() => {
//                         setRegister(false);
//                         setLogin(false);
//                         setOtp(false);
//                     }}
//                 >
//                     {" "}
//                     <img
//                         src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png"
//                         alt="close"
//                     ></img>
//                 </Button>
//             </Box>
//             {isError && (
//                 <Typography
//                     variant="subtitle1"
//                     component="h3"
//                     gutterBottom
//                     color="error"
//                 >
//                     {message}
//                 </Typography>
//             )}
//         </Box>
//     ) : otp ? (
//         <Box classes={{ root: styles.login }}>
//             <Box classes={{ root: styles.otpBox }}>
//                 <Box classes={{ root: styles.outerBox }}>
//                     <PhoneAndroidOutlinedIcon className={classes.phone} />
//                     <input placeholder="Mobile No." />
//                 </Box>
//                 {/* <input
//                             name="otp"
//                             value={userOtp}
//                             onChange={handleChange}
//                             className={styles.inputEmail}
//                             placeholder="Enter OTP"
//                         /> */}

//                 <Box classes={{ root: styles.outerBox }}>
//                     {/* <EmailIcon className={classes.phone} />
//                             <input
//                                 name="regEmail"
//                                 value={regEmail}
//                                 onChange={handleChange}
//                                 className={styles.otpEmail}
//                                 placeholder="Email Address"
//                             /> */}
//                     {/* {validation && validation.split(" ")[0] === '"email"' && (
//                                     <FormHelperText error>{validation}</FormHelperText>
//                                 )} */}
//                 </Box>
//                 <Box classes={{ root: styles.outerBox }}>
//                     <VpnKeyIcon className={classes.phone} />
//                     {/* <input
//                                 type="password"
//                                 name="regPassword"
//                                 value={regPassword}
//                                 onChange={handleChange}
//                                 className={styles.inputEmail}
//                                 placeholder="Set Password"
//                             /> */}
//                     {validation && validation.split(" ")[0] === '"password"' && (
//                         <FormHelperText error>{validation}</FormHelperText>
//                     )}
//                 </Box>
//                 <button onClick={handleRegister} className={styles.btnLogin}>
//                     Register
//             </button>
//                 <Button
//                     classes={{ root: styles.close }}
//                     onClick={() => {
//                         setRegister(false);
//                         setLogin(false);
//                         setOtp(false);
//                     }}
//                 >
//                     {" "}
//                     <img
//                         src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png"
//                         alt="close"
//                     ></img>
//                 </Button>
//             </Box>
//             {isError && (
//                 <Typography
//                     variant="subtitle1"
//                     component="h3"
//                     gutterBottom
//                     color="error"
//                 >
//                     {message}
//                 </Typography>
//             )}
//         </Box>
//     ) : (
//                     ""
//                 )
// }
//         </>
//     );
// }
