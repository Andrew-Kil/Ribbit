import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import HomeSideBar from "./components/SideBar/HomeSideBar.js";
import AdSideBar from "./components/SideBar/AdSideBar.js";
import "./App.css";

import User from "./components/User/User.js";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="side-bar">
          <HomeSideBar />
          <AdSideBar />
        </div>
        <div className="main-content">Stufffffff</div>
        <Switch>
          <Route exact path="/users" component={User} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
