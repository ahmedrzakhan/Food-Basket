import React from 'react'
import Box from '@material-ui/core/Box'
import styles from './styles.module.css'

function RouteNav() {
    return (
        <>
            <Box classes={{ root: styles.routes }}>
                <Box classes={{ root: styles.col }}>
                    {/* <select className={styles.select}>
                        < option value="" > Shop By category</option>
                        <option value="">Fresh Fruits</option>
                        <option value="">Fruits and vegetables</option>
                        <option value="">Shop By category</option>
                    </select> */}
                     Shop By category

                    <ul className={styles.col1}>
                        <li>fresh&fast</li>
                        <li>fresh&fast</li>
                        <li>fresh&fast</li>
                    </ul>

                </Box>
                <Box classes={{ root: styles.col }}>
                    Past purchases
                </Box>
                <Box classes={{ root: styles.col }}>
                    Offers
                </Box>
                <Box classes={{ root: styles.col }}>
                    Connoisseur’s Selection
                </Box>
            </Box>

        </>
    )
}

export default RouteNav