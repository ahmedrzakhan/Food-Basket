import React from "react";
import { AppBar, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import TopNav from "../dashboard/TopNavBar/TopNav";
import RouteNav from "../dashboard/TopNavBar/RouteNav";
import LoginForm from "./Login";
import Address from "./Address";
import OrderSummary from "./OrderSummary";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "95%",
    margin: "auto",
    marginTop: "2%",
  },
  newTab: {
    color: "grey",
  },
}));

function Checkout() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const loginStatus = JSON.parse(localStorage.getItem("status"));

  const orderSummaryDataArr =
    JSON.parse(localStorage.getItem("OrderSummary")) || [];
  return (
    <>
      <TopNav />
      <RouteNav />

    const orderSummaryDataArr = JSON.parse(localStorage.getItem("OrderSummary")) || []
    // console.log(orderSummaryDataArr.products.length)
    return (
        <>
            <TopNav />
            <RouteNav />
           
            <div className={classes.root}>
                <TabContext value={value}>
                    <AppBar position="static" color="default">
                        <TabList onChange={handleChange} aria-label="simple tabs example">
                            {
                                loginStatus?
                                <Tab className={classes.newTab} label="1.Login" value="1" disabled/>
                                :
                                <Tab className={classes.newTab} label="1.Login" value="1" />
                            }
                            <Tab color="primary"label="2.Address" value="2" />
                            {
                                loginStatus &&  orderSummaryDataArr.products !== undefined && orderSummaryDataArr.products.length > 0 ?
                                <Tab label="3.Order Summary" value="3" />
                                :
                                <Tab label="3.Order Summary" value="3" disabled/>
                            }
                            {/* <Tab label="4.Payment Options" value="4" /> */}
                        </TabList>
                    </AppBar>
                    <TabPanel value="1">    <LoginForm /></TabPanel>
                    <TabPanel value="2"><Address/></TabPanel>
                   
                    <TabPanel value="3"><OrderSummary/> </TabPanel>
                    {/* <TabPanel value="4">payments</TabPanel> */}
                </TabContext>
            </div>
        
            </>
   )
          <TabPanel value="3">
            <OrderSummary />{" "}
          </TabPanel>
          {/* <TabPanel value="4">payments</TabPanel> */}
        </TabContext>
      </div>
    </>
  );
}
export default Checkout;
