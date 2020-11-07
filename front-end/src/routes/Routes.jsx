import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesPage from "./../components/CategoriesPageMain/categoriesPage/CategoriesPage";
import Dashboard from "./../components/dashboard/Dashboard";
import FreshFast from "../components/dashboard/TopNavBar/FreshFast/FreshFast";
import Test from "../components/Test"
import RegisterOtp from "../components/Register-Otp";
import SingleProduct from "../components/SingleProduct/SingleProduct";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" render={() => <Dashboard />} />
      <Route path="/home/:category/:sub_category" render={() => <CategoriesPage />} />
      <Route path="/product/:id" render={() => <SingleProduct />} />
      <Route path="/home/:categories" render={() => <CategoriesPage />} />
      <Route path="/register-otp" render={() => <RegisterOtp />} />
      <Route path="/freshFast" render={() => <FreshFast />} />
    </Switch>
  );
};

export default Routes;
