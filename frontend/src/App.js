import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar.js";
import HomeSideBar from "./components/SideBar/HomeSideBar.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HomeSideBar />
      </div>
    );
  }
}

export default App;
