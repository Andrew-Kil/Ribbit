import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import HomeSideBar from "./components/SideBar/HomeSideBar.js";
import "./App.css";

import User from "./components/User/User.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HomeSideBar />
        <Switch>
          <Route exact path="/user" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;
