import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import logo from "./logo.png";
import frog from "./frog.png";
import magnifying_glass from "./magnifying_glass.png";
import user_profile_avatar from "./user-profile-avatar.png";
import fly from "./fly.png";

export default class NavBar extends Component {
  state = {
    searchInput: "",
    darkMode: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Input submitted");
  };

  toggleDarkMode = () => {
    const darkModeState = this.state.darkMode;
    this.setState({
      darkMode: !darkModeState
    });
    darkModeState
      ? document.body.classList.remove("dark-mode")
      : document.body.classList.add("dark-mode");
  };

  render() {
    return (
      <nav className="navbar">
        <NavLink to={"/"}>
          <div>
            <img
              src={frog}
              alt="frog"
              className="frog"
              height="50"
              width="50"
            />
            <img
              src={logo}
              alt="logo"
              className="logo"
              height="50"
              width="100"
            />
          </div>
        </NavLink>
        <form className="navbar-form" onSubmit={this.handleSubmit}>
          <div className="search-container">
            <img
              src={magnifying_glass}
              alt="magnifying glass"
              className="magnifying-glass"
              height="30"
              width="30"
            />
            <input
              type="text"
              name="searchInput"
              value={this.state.searchInput}
              size="50"
              placeholder="Search Ribbit"
              className="search-bar"
              onChange={this.handleChange}
            />
          </div>
        </form>
        <div>
          <button id="dark-mode" onClick={this.toggleDarkMode}>
            Dark Mode
          </button>
        </div>
        {/* <NavLink to={"/users"}>
          <div className="user-profile-container">
            <button className="user-profile-button">
              <div className="user-profile">
                <img
                  src={user_profile_avatar}
                  className="user-profile-avatar"
                  alt="avatar for user"
                />
                <span className="user-profile-name">what_the_frog_m8</span>
                <div>
                  <img src={fly} alt="fly" id="fly" />
                  <span className="user-profile-karma">182 karma</span>
                </div>
              </div>
            </button>
          </div>
        </NavLink> */}

        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>

        <div className="login-signup">
          <NavLink to={"/login"}>
            <a
              href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F"
              alt="log-in"
              className="login"
            >
              Log-in
            </a>
          </NavLink>
          <NavLink to={"/signup"}>
            <a
              href="https://www.reddit.com/register/?dest=https%3A%2F%2Fwww.reddit.com%2F"
              alt="sign-up"
              className="signup"
            >
              Sign Up
            </a>
          </NavLink>
        </div>
      </nav>
    );
  }
}
