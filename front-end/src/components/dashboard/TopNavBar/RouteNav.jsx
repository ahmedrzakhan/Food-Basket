import React from 'react'
import Box from '@material-ui/core/Box'
import styles from './styles.module.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';


function RouteNav() {



    return (
        <>
            <Box classes={{ root: styles.routes }}>
                <Box classes={{ root: styles.col1 }}>
                    <Box classes={{ root: styles.hoverDiv }}>
                        <span style={{ color: "#c94267", background: "#f3f3f3" }}>SHOP BY CATEGORY</span>
                        <ArrowDropDownIcon classes={{ root: styles.arrow }} />

                        <Box classes={{ root: styles.innerHoverDiv }}>
                            <p >Indian Grocery<span className={styles.chevron}><ChevronRightOutlinedIcon /></span></p>
                            <p >Fruits & Vegetables <span className={styles.chevron}><ChevronRightOutlinedIcon size="small" /></span></p>
                            <p>Snacks <span className={styles.chevron}><ChevronRightOutlinedIcon /></span></p>
                        </Box>
                    </Box>
                </Box>

                <Box classes={{ root: styles.col }}>
                    Past purchases
                </Box>
                <Box classes={{ root: styles.col }}>
                    Offers
                </Box>
                {/* <Box classes={{ root: styles.col }}>
                    Connoisseur’s Selection
                </Box> */}
            </Box>


        </>
    )
}

export default RouteNav