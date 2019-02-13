import React, { Component } from "react";
import "./NavBar.css";

import logo from "./logo.png";
import frog from "./frog.png";
import magnifying_glass from "./magnifying_glass.png";

export default class NavBar extends Component {
  state = {
    searchInput: ""
  };
  render() {
    return (
      <div className="navbar">
        <a href="/">
          <img src={frog} alt="frog" className="frog" height="50" width="50" />
          <img src={logo} alt="logo" className="logo" height="50" width="120" />
        </a>
        <div>
          <img
            src={magnifying_glass}
            alt="magnifying glass"
            className="magnifying_glass"
            height="30"
            width="30"
          />
          <input
            type="text"
            value={this.state.searchInput}
            size="40"
            placeholder="Search Ribbit"
            className="searchBar"
          />
        </div>
      </div>
    );
  }
}
