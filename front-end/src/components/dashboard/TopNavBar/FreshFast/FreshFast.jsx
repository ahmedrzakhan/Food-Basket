import React from 'react'
import { Box } from '@material-ui/core'
import styles from './fresh.module.css'


function FreshFast() {
    return (
        <>
            <Box classes={{ root: styles.heading }}>
                <img className={styles.photo} src="https://m.naturesbasket.co.in/Images/Fresh_n_fast_biker_black_transparent.png" alt="delivery" />
                    GET FRESH AND FAST DELIVERY WITH NATURE’S BASKET AT YOUR DOORSTEP !
            </Box>
        </>
    )
}
export default FreshFast