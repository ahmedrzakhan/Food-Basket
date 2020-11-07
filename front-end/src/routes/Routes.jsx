import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesPage from "./../components/CategoriesPageMain/categoriesPage/CategoriesPage";
import Dashboard from "./../components/dashboard/Dashboard";
import Dummy from "./../components/dashboard/Dummy";
import Test from "../components/Test"
import RegisterOtp from "../components/Register-Otp";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import TestGetProduct from "../components/AddProduct/TestGetProduct";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" render={() => <Dashboard />} />
      <Route path="/home/:category/:sub_category" render={() => <CategoriesPage />} />
      <Route path="/dummy/:id" render={() => <Dummy />} />
      <Route path="/product/1" render={() => <SingleProduct/>} />
      <Route path="/test" render={() => <Test />} />
      <Route path="/button-test" render={() => {
       
        return(
          <>
          <TestGetProduct/>
          </>
        )
      }} />
      <Route path="/register-otp" render={() => <RegisterOtp />} />
    </Switch>
  );
};

export default Routes;
