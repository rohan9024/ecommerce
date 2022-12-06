import React from "react";
import Home from "../components/Home";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/login" component={Login} exact={true} />
      
    </Switch>
  );
};

export default AppRouter;
