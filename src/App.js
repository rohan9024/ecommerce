import React from "react"

import Home from "./components/Home";
import Login from "./Login"
import ProductDescription from "./pages/ProductDescription";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product/:id" component={ProductDescription} />
        </Switch>

      </Router>
      
      {/* <Home /> */}

    </>

  );
}

export default App;
