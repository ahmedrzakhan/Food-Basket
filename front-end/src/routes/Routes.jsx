import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./../components/dashboard/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Dashboard />} />
    </Switch>
  );
};

export default Routes;
