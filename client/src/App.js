import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
// import ColorList from './components/ColorList';
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        {/* <Route path="/color-list" component={ColorList} /> */}
        <Route exact path="/" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
