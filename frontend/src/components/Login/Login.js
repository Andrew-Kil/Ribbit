import React, { Component } from "react";

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
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <input
              id="loginUsername"
              class="AnimatedForm__textInput"
              type="text"
              name="username"
              data-empty="true"
              onChange={this.handleChange}
            />
            <label class="AnimatedForm__textInputLabel" for="loginUsername">
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
          <button class="AnimatedForm__submitButton" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
