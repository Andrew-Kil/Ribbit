import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import HomeSideBar from "./components/SideBar/HomeSideBar.js";
import AdSideBar from "./components/SideBar/AdSideBar.js";
import "./App.css";

import User from "./components/User/User.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="main-content">Stufffffff</div>
        <div className="side-bar">
          <HomeSideBar />
          <AdSideBar />
        </div>
        <Switch>
          <Route exact path="/users" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;
