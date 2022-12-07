import React from "react";
import Home from "../components/Home";
import ProductDescription from '../pages/ProductDescription'
import { Switch, Route } from "react-router-dom";
import Shoes from "../components/Shoes";
import Login from "../Login";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}  />
      <Route exact path="/login" component={Login}  />
      <Route exact path="/shoes" component={Shoes} />
      <Route exact path="/product/:id" component={ProductDescription}/>
    </Switch>
  );
};

export default AppRouter;
