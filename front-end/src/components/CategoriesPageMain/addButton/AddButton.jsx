import React from "react"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }))

function AddButton()
{
    const classes = useStyles();


    return(
        <Button 
            variant="contained"
            style={{background: "rgb(146, 190, 77)", color: "white", marginBottom: "12px", marginLeft:"-5px"}}
            className={classes.button}
            startIcon={<ShoppingCartIcon />}

        > Add</Button >
    )

}

export default AddButton