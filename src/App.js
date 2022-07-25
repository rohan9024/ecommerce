import React from "react"

import Home from "./components/Home";
import Login from "./Login"
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
        </Switch>

      </Router>
      
      {/* <Home /> */}

    </>

  );
}

export default App;
