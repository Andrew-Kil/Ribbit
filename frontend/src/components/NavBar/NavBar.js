import React, { Component } from "react";
import "./NavBar.css";

import logo from "./logo.png";
import frog from "./frog.png";
import magnifying_glass from "./magnifying_glass.png";
import user_profile_avatar from "./user-profile-avatar.png";

export default class NavBar extends Component {
  state = {
    searchInput: ""
  };
  render() {
    return (
      <div className="navbar">
        <a href="/">
          <img src={frog} alt="frog" className="frog" height="50" width="50" />
          <img src={logo} alt="logo" className="logo" height="50" width="100" />
        </a>
        <form className="navbar-form">
          <img
            src={magnifying_glass}
            alt="magnifying glass"
            className="magnifying-glass"
            height="30"
            width="30"
          />
          <input
            type="text"
            value={this.state.searchInput}
            size="50"
            placeholder="Search Ribbit"
            className="search-bar"
          />
          <div className="user-profile-container">
            <button className="user-profile-button">
              <div className="user-profile">
                <img
                  src={user_profile_avatar}
                  className="user-profile-avatar"
                  alt="avatar for user"
                />
                <span className="user-profile-name">what_the_frog_m8</span>
                <div className="user-profile-karma">182 karma</div>
              </div>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
