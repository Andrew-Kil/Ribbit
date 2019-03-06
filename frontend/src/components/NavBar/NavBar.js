import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./NavBar.css";
import Auth from "../../utils/Auth";

import user_profile from "./icons/user-profile.png";
import down_arrow from "./icons/down-arrow.png";
import logo from "./logos/ribbit-logo.png";
import frog from "./logos/frog.png";
import darkmode from "./icons/darkmode.png";
// import magnifying_glass from "./icons/magnifying_glass.png";
// import user_profile_avatar from "./avatar/user-profile-avatar.png";

export default class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: "",
      darkMode: false,
      isLoggedIn: true,
      user: "",
      dropdownClicked: false,
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

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

  // showMenu = () => {
  //   const dropDownClicked = this.state.dropdownClicked;
  //   this.setState({
  //     dropdownClicked: !dropDownClicked
  //   });
  //   if (dropDownClicked) {
  //     document.body.classList.add("show");
  //   } else {
  //     document.body.classList.remove("show");
  //   }
  //   console.log("clicked!");
  // };

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

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
    // const { isLoggedIn } = this.state;
    // let logoutButton = isLoggedIn ? (
    //   <span>
    //     <button onClick={this.logoutUser}>Logout</button>
    //   </span>
    // ) : null;

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

        <div className="navbar-container">
          {/* <label className="icon-label">
            <img
              src={magnifying_glass}
              alt="magnifying glass"
              className="magnifying-glass"
              height="30"
              width="30"
            />
          </label> */}
          <form className="navbar-form" onSubmit={this.handleSubmit}>
            <div className="search-container">
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
        <div className="user-dropdown" onClick={this.showMenu}>
          <button className="nav-dropdown-menu">
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

          {this.state.showMenu ? (
            <div
              className="menu"
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <div className="dropdown-spacing" />

              {/* <div className="dropdown-links-container">
                <NavLink to={"/ribbit-coins"} className="dropdown-links">
                  Ribbit Coins
                </NavLink>
              </div>
              <div className="dropdown-links-container">
                <NavLink to={"/ribbit-premium"} className="dropdown-links">
                  Ribbit Premium
                </NavLink>
              </div>
              <div className="dropdown-links-container">
                <NavLink to={"/help-center"} className="dropdown-links">
                  Help Center
                </NavLink>
              </div>
              <div className="dropdown-links-container">
                <NavLink to={"/old-ribbit"} className="dropdown-links">
                  Visit Old Ribbit
                </NavLink>
              </div> */}

              <div
                className="dropdown-links-container"
                onClick={this.toggleDarkMode}
              >
                {" "}
                <img src={darkmode} alt="darkmode icon" id="dark-mode" />
                <span className="darkmode-text">Dark Mode </span>
              </div>
              <NavLink to={"/ribbit-coins"}>
                <div className="dropdown-links">Ribbit Coins</div>
              </NavLink>
              <NavLink to={"/ribbit-premium"}>
                <div className="dropdown-links">Ribbit Premium</div>
              </NavLink>
              <NavLink to={"/help-center"}>
                <div className="dropdown-links">Help Center</div>
              </NavLink>
              <NavLink to={"/old-ribbit"}>
                <div className="dropdown-links" id="last-dropdown-link">
                  Visit Old Ribbit
                </div>
              </NavLink>
            </div>
          ) : null}

          {/* <div className="dropdown-content">
            <NavLink to={"/ribbit-coins"}>Ribbit Coins</NavLink>
            <NavLink to={"/ribbit-premium"}>Ribbit Premium</NavLink>
            <NavLink to={"/help-center"}>Help Center</NavLink>
            <NavLink to={"/old-ribbit"}>Visit Old Ribbit</NavLink>
            <div>hi</div>
          </div> */}
        </div>
      </nav>
    );
  }
}
