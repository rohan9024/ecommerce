import React from "react"

import {
  BrowserRouter as Router,
} from "react-router-dom";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <>
      <Router>
      <AppRouter/>
      </Router>
      
      {/* <Home /> */}

    </>

  );
}

export default App;
