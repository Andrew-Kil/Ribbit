import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Signup.css";

export default class SignupInfo extends Component {
  state = {
    username: "",
    password_digest: "",
    email: "",
    message: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password_digest, email } = this.state;
    axios
      .post("/users/new", {
        username: username,
        password_digest: password_digest,
        email: email
      })
      .then(res => {
        this.setState({
          username: "",
          password_digest: "",
          message: "!!!Created new user!!!"
        });
      })
      .catch(err => {
        this.setState({
          message: "Error"
        });
        return err;
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form-spacing">
          <h1 className="signup-title">Choose your username</h1>
          <br />
          <p className="signup-description">
            Your username is how other community members will see you. This name
            will be used to credit you for things you share on Ribbit. What
            should we call you?
            <br />
          </p>

          {/* <fieldset className="email-fieldset">
            <input
              type="email"
              name="email"
              className="signup-input-email"
              onChange={this.handleChange}
            />
            <label class="email-input-label">Email</label>
          </fieldset> */}

          <fieldset className="username-fieldset">
            <input
              type="text"
              name="username"
              className="signup-input-username"
              onChange={this.handleChange}
            />
            <br />
            <label className="username-input-label">Username</label>
          </fieldset>
          <fieldset className="password-fieldset">
            <input
              type="text"
              name="password_digest"
              className="signup-input-password"
              onChange={this.handleChange}
            />
            <br />
            <label className="password-input-label">Password</label>
          </fieldset>
          <fieldset className="email-fieldset">
            <input
              type="email"
              name="email"
              className="signup-input-email"
              onChange={this.handleChange}
            />
            <br />
            <label class="email-input-label">Email</label>
          </fieldset>
          <br />
          <p>Here are some username suggestions</p>
          <br />
          <p>2_frog_2_furious</p>
          <p>i_toad_u_so</p>
          <p>OGinternettroll</p>
          <p>NOT_N.S.A.</p>
          <p>beer_pond_champion8572</p>
          <br />

          <p>{this.state.message}</p>
          <Link to="/signup">
            <button className="back-button">Back</button>
          </Link>
          {/* <Link to="/"> */}
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}
