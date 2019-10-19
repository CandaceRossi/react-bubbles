import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
// import ColorList from './components/ColorList';
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        {/* <Route path="/color-list" component={ColorList} /> */}
        <PrivateRoute exact path="/" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
