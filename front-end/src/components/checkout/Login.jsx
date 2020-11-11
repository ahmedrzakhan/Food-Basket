import React from 'react'
import { Box } from '@material-ui/core'
import styles from './checkout.module.css'
function LoginForm() {
    return (
        <>
            <Box classes={{ root: styles.main }}>
                <Box classes={{ root: styles.first }}>
                    <Box>Login into NatureBasket</Box>
                    <Box classes={{root:styles.email}}>
                        <Box>Enter your EmailID</Box>
                        <Box>
                            <input placeholder="Email ID" />
                        </Box>
                        <Box>Enter your Password</Box>
                        <Box>
                            <input placeholder="Password" />
                        </Box>
                    </Box>
                    <Box>
                        <button className={styles.button}>LOGIN   </button>
                    </Box>
                </Box>
                <Box classes={{root:styles.second}}>
                    <button className={styles.button}>LOGIN</button>
                    OR
                    <button className={styles.button}>REGISTER</button>
                </Box>
             

           </Box>
      </>      
    )
}
export default LoginForm