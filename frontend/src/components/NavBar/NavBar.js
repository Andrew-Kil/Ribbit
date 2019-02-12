import React, { Component } from "react";
import "./NavBar.css";
import logo from "./logo.png";

export default class NavBar extends Component {
  state = {
    searchInput: ""
  };
  render() {
    return (
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" height="50" width="120" />
        <input
          type="text"
          value={this.state.searchInput}
          size="40"
          placeholder="Search Ribbit"
          className="searchBar"
        />
      </div>
    );
  }
}
