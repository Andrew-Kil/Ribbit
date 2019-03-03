import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./NavBar.css";
import Auth from "../../utils/Auth";

import user_profile from "./user-profile.png";
import down_arrow from "./down-arrow.png";
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
    user: "",
    dropdownClicked: false
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

  toggleDropDown = () => {
    const dropDownClicked = this.state.dropdownClicked;
    this.setState({
      dropdownClicked: !dropDownClicked
    });
    if (dropDownClicked) {
      document.body.classList.add("show");
    } else {
      document.body.classList.remove("show");
    }
    console.log("clicked!");
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

        <div className="login-logout-signup">
          <NavLink to={"/login"}>
            <span className="login">Log-in</span>
          </NavLink>

          {/* {logoutButton} */}

          <NavLink to={"/signup"}>
            <span className="signup">Sign Up</span>
          </NavLink>
        </div>
        <div className="user-dropdown">
          <button className="nav-dropdown-menu" onClick={this.toggleDropDown}>
            <div className="icon-container">
              <img
                src={user_profile}
                alt="user profile icon"
                className="user-profile-icon"
              />
              <img
                src={down_arrow}
                alt="down arrow icon"
                className="down-arrow"
              />
            </div>
          </button>
          <div className="dropdown-content">
            {/* <NavLink to={"/ribbit-coins"}>Reddit Coins</NavLink>
            <NavLink to={"/ribbit-premium"}>Reddit Premium</NavLink>
            <NavLink to={"/help-center"}>Help Center</NavLink>
            <NavLink to={"/old-ribbit"}>Visit Old Ribbit</NavLink> */}
            {/* <div>hi</div> */}
          </div>
        </div>
      </nav>
    );
  }
}
