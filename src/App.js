import React from "react"
import Home from "./components/Home";
import Login from "./Login"
import Shoes from "./components/Shoes.js";
import Men from "./components/Men.js";
import Women from "./components/Women.js";
import Kids from "./components/Kids.js";
import ProductDescription from "./pages/ProductDescription";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/shoes" component={Shoes} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/women" component={Women} />
        <Route exact path="/kids" component={Kids} />
        <Route exact path="/product/:id" component={ProductDescription} />
      </Switch>
    </Router>


  );
}

export default App;
