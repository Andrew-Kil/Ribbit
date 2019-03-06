import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import frog from "../NavBar/logos/frog.png";

import Auth from "../../utils/Auth";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password_digest: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // loginUser = e => {
  //   e.preventDefault();
  //   const { username, password } = this.state;

  //   axios
  //     .post("/users/login", { username, password })
  //     .then(() => {
  //       Auth.authenticateUser(username);
  //     })
  //     .then(() => {
  //       this.props.checkAuthenticateStatus();
  //     })
  //     .then(() => {
  //       this.setState({
  //         username: "",
  //         password: ""
  //       });
  //     });
  // };

  handleLogin = e => {
    e.preventDefault();
    console.log("yay");
    console.log(this.state);

    axios
      .post("/users/login", {
        username: this.state.username,
        password_digest: this.state.password_digest
      })
      .then(res => {
        debugger;
        Auth.authenticateUser(this.state.username);
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
        this.setState({
          username: "",
          password_digest: ""
        });
      })
      .catch(err => {
        return err;
      });
  };

  validateForm() {
    return (
      this.state.username.length > 0 && this.state.password_digest.length > 0
    );
  }

  render() {
    console.log(this.state);
    return (
      <div className="form-container">
        <form onSubmit={this.handleLogin}>
          <fieldset className="signin-username-fieldset">
            <img
              src={frog}
              alt="frog"
              className="frog"
              height="50"
              width="50"
            />
            <h1 className="signin-title">Sign in</h1>
            <input
              id="loginUsername"
              type="text"
              name="username"
              data-empty="true"
              onChange={this.handleChange}
            />
            <label className="username-text-input" htmlFor="loginUsername">
              Username
            </label>
          </fieldset>
          <fieldset>
            <input
              id="loginPassword"
              type="password"
              name="password_digest"
              data-empty="true"
              onChange={this.handleChange}
            />
            <label htmlFor="loginPassword">Password</label>
          </fieldset>
          {/* <button type="submit" disabled={!this.validateForm()}> */}
          <button type="submit">Sign in</button>
          <p>New to Ribbit?</p>
          <a href="/signup" className="signup-link">
            Sign Up
          </a>
        </form>
      </div>
    );
  }
}
