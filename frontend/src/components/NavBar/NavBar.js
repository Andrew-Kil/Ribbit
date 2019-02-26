import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./NavBar.css";
import Auth from "../../utils/Auth";

import logo from "./ribbit-logo.png";
import frog from "./frog.png";
import magnifying_glass from "./magnifying_glass.png";
// import user_profile_avatar from "./user-profile-avatar.png";
// import fly from "./fly.png";

export default class NavBar extends Component {
  state = {
    searchInput: "",
    darkMode: false,
    isLoggedIn: true,
    user: ""
  };

  componentDidMount() {
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.get("/users/isLoggedIn").then(user => {
      if (user.data.username === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if (user.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
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

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });

    console.log("USER LOGGED OUT");
  };

  render() {
    const { isLoggedIn } = this.state;

    let logoutButton = isLoggedIn ? (
      <span>
        <button onClick={this.logoutUser}>Logout</button>
      </span>
    ) : null;
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
        <div>
          <NavLink to={"/users"}>
            <span className="usersLink">Users</span>
          </NavLink>
          <NavLink to={"/posts"}>
            <span className="postsLink">Posts</span>
          </NavLink>
          <NavLink to={"/comments"}>
            <span className="commentsLink">Comments</span>
          </NavLink>
          <NavLink to={"/subribbits"}>
            <span className="subribbitsLink">Subribbits</span>
          </NavLink>
        </div>

        <div className="login-logout-signup">
          <NavLink to={"/login"}>
            <a
              href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F"
              alt="log-in"
              className="login"
            >
              Log-in
            </a>
          </NavLink>

          {logoutButton}

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
