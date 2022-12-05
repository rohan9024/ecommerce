import React from "react"

import Home from "./components/Home";
import Login from "./Login"
import Shoes from "./components/Shoes.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
      
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/shoes' component={Shoes} />
        </Switch>

      </Router>


  );
}

export default App;
