import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesPage from "./../components/CategoriesPageMain/categoriesPage/CategoriesPage";
import Dashboard from "./../components/dashboard/Dashboard";
import Test from "../components/Test"
import RegisterOtp from "../components/Register-Otp";
import SingleProduct from "../components/SingleProduct/SingleProduct";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Dashboard />} />
      <Route path="/fruits-vegetables" render={() => <CategoriesPage />} />
      <Route path="/product/1" render={() => <SingleProduct/>} />
      <Route path="/test" render={() => <Test />} />
      <Route path="/register-otp" render={() => <RegisterOtp />} />
    </Switch>
  );
};

export default Routes;
