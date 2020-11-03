import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { StylesContext } from '@material-ui/styles';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FormHelperText from '@material-ui/core/FormHelperText'


import styled from 'styled-components'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const Input = styled.input`
width:60%;
height:60px`

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '1px 1px',
        display: 'flex',
        alignItems: 'center',
        width: 900,
        border: '1px solid #AAACA9',
        float: 'left'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,

    },
    iconButton: {
        padding: 1,

        background: '#7CCB55 ',
        top: 0,
        bottom: 0,

    },
    iconColor: {
        color: 'white',
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));
function TopNav() {
    const classes = useStyles();
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)
    return (

        <>
            <Box classes={{ root: styles.topDiv }}>

                <Box align="left" classes={{ root: styles.innerDiv }}>
                    Now accepting Wine & Beer orders (Select stores, Mumbai Only). Delivery timings 10.00 AM to 6:00
                    PM subject to verification of permit and age by delivery person. Age criteria 21+
                    for mild beer and 25+ for strong beer and wine.
                    </Box>
            </Box>

            {register ? <Box classes={{ root: styles.login }}>
                <Box classes={{ root: styles.inputBox }}>
                    <input placeholder="Mobile Number" />
                    <button className={styles.btnLogin}>Continue</button>
                    <Button className={styles.close} onClick={() => setRegister(false)}> <img src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png" alt="close"></img>
                    </Button>
                </Box>
            </Box> : ""}
            {login ?
                <Box classes={{ root: styles.login }}>
                    <Box classes={{ root: styles.inputBox }}>
                        <input className={styles.inputEmail} placeholder="Email Address" />
                        <input className={styles.inputEmail} placeholder="Password" />
                        <button className={styles.btnLogin}>Login</button>
                        <Button >Login Via OTP</Button>
                        <Button className={styles.close} onClick={() => setLogin(false)}> <img src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png" alt="close"></img>
                        </Button>
                    </Box>

                </Box> : ""}
            <Box>
                <Box classes={{ root: styles.logo }}>
                    <Link className={styles.photo} to="/" ><img src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2" alt="logo" />
                    </Link>
                </Box>

                <Box>
                    <Box>
                        <Link className={styles.Toplink} to="/">Online Slots Availability</Link>
                        <Link className={styles.Toplink} to="/">Fast & Fresh</Link>
                        <Button onClick={() => setLogin(true)} classes={{ root: styles.TopRight }} >Login</Button>
                        <Button onClick={() => setRegister(true)} classes={{ root: styles.TopRight }}>Register</Button>

                    </Box>
                    <Box>
                        <Box className={classes.root}>

                            <InputBase
                                className={classes.input}
                                placeholder="Start Shopping..."
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <Box className={classes.iconButton} >
                                <IconButton type="submit" aria-label="search">
                                    <SearchIcon className={classes.iconColor} />
                                </IconButton>
                            </Box>


                        </Box>
                        {/* <Box >
                            <Box className={styles.starCart}>
                                <StarBorderIcon classes={{ root: styles.star }} />
                                <Divider className={classes.divider} orientation="vertical" />
                                <img className={styles.cart} src="https://t3.ftcdn.net/jpg/02/69/99/40/240_F_269994056_XqWttASg2paR7dIzvQYcyXyLol3HbfDz.jpg" />
                            </Box>
                        </Box> */}
                    </Box>

                </Box >

            </Box >




        </>
    )
}
export default TopNav

