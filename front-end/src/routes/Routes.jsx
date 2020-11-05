import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesPage from "./../components/CategoriesPageMain/categoriesPage/CategoriesPage";
import Dashboard from "./../components/dashboard/Dashboard";
import Test from "../components/Test"
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Dashboard />} />
      <Route path="/fruits-vegetables" render={() => <CategoriesPage/>} />
      <Route path="/test" render={() => <Test />} />
    </Switch>
  );
};

export default Routes;
