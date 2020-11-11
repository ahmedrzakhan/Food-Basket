import React from 'react'
import { Box,TextField, Checkbox} from '@material-ui/core'
import styles from './checkout.module.css'
function Address() {
    return (
        <>
            <Box>
                <Box>ADDRESS <span>DETAILS</span></Box>
                <Box ><button className={ styles.btn }>REVIEW AND PLACE ORDER</button></Box>
                <Box classes={{ root: styles.ship }}>
                Enter Shipping Address<br/>
                <small>(Fields marked with * are mandatory)
                    </small></Box>
              
                <Box>
                    <Box classes={{ root: styles.box }}>
                       First Name*</Box>
                    <Box> <TextField variant="outlined" /></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        Last Name*</Box>
                    <Box> <TextField variant="outlined" /></Box>
                </Box>

                <Box>
                    <Box classes ={{root:styles.box}}>
                        Address*</Box>
                    <Box> <TextField variant="outlined" /></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        Landmark*</Box>
                    <Box> <TextField variant="outlined" /></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        Pincode*</Box>
                    <Box> <TextField variant="outlined" /></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        Area*</Box>
                    <Box> <TextField variant="outlined" /></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        Country*</Box>
                    <Box> <TextField variant="outlined" /></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        State*</Box>
                    <Box> <TextField variant="outlined" /></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        City*</Box>
                    <Box> <TextField variant="outlined" /></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        Mobile No*</Box>
                    <Box> <TextField variant="outlined" /></Box>
                </Box>
                <Box>
                    Billing Address <Checkbox/>Same as Shipping address
                </Box>
            </Box>
        </>
    )
}
export default Address