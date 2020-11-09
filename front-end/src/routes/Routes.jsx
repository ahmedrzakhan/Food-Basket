import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesPage from "./../components/CategoriesPageMain/categoriesPage/CategoriesPage";
import Dashboard from "./../components/dashboard/Dashboard";
import FreshFast from "../components/dashboard/TopNavBar/FreshFast/FreshFast";

import SingleProduct from "../components/SingleProduct/SingleProduct";
import TestGetProduct from "../components/AddProduct/TestGetProduct";

import Store from "./../components/storeLocator/Store";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Dashboard />} />
      <Route
        path="/home/:category/:sub_category"
        render={() => <CategoriesPage />}
      />
      <Route
        path="/button-test"
        render={() => {
          return (
            <>
              <TestGetProduct />
            </>
          );
        }}
      />
      <Route path="/product/:id" render={() => <SingleProduct />} />
      <Route path="/home/:categories" render={() => <CategoriesPage />} />
      <Route path="/freshFast" render={() => <FreshFast />} />
      <Route path="/store-locator" render={() => <Store />} />
    </Switch>
  );
};

export default Routes;
