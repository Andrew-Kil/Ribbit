import React, { Component } from "react";
import "./Login.css";
import frog from "../NavBar/frog.png";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.username === "bob" && this.state.password === "smith") {
      console.log("LOGIN SUCCESS");
    }
    console.log("FORM SUBMITTED");
  };

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
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
              class="AnimatedForm__textInput"
              type="text"
              name="username"
              data-empty="true"
              onChange={this.handleChange}
            />
            <label class="username-text-input" for="loginUsername">
              Username
            </label>
          </fieldset>
          <fieldset>
            <input
              id="loginPassword"
              class="AnimatedForm__textInput"
              type="password"
              name="password"
              data-empty="true"
              onChange={this.handleChange}
            />
            <label class="AnimatedForm__textInputLabel" for="loginPassword">
              Password
            </label>
          </fieldset>
          <button
            class="AnimatedForm__submitButton"
            type="submit"
            disabled={!this.validateForm()}
          >
            Sign in
          </button>
          <p>New to Ribbit?</p>
          <a href="/signup" className="signup-link">
            Sign Up
          </a>
        </form>
      </div>
    );
  }
}
