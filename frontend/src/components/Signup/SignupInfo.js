import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default class SignupInfo extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.email) {
      this.setState({
        emailVerified: true
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h1 className="signup-info-title">Choose your username</h1>
          <p className="signup-description">
            Your username is how other community members will see you. This name
            will be used to credit you for things you share on Ribbit. What
            should we call you? <br />
          </p>
          <fieldset className="username-fieldset">
            <input
              type="text"
              name="username"
              className="signup-input-username"
              onChange={this.handleChange}
            />
            <label class="username-input-label">Choose a username</label>
          </fieldset>
          <fieldset className="password-fieldset">
            <input
              type="text"
              name="username"
              className="signup-input-password"
              onChange={this.handleChange}
            />
            <label class="password-input-label">Password</label>
          </fieldset>
          <br />
          <p>Here are some username suggestions</p>
          <br />
          <p>2_frog_2_furious</p>
          <p>i_toad_u_so</p>
          <p>OGinternettroll</p>
          <p>NOT_N.S.A.</p>
          <p>beer_pond_champion8572</p>
          <Link to="/signup">
            <button>Back</button>
          </Link>
          <Link to="/register">
            <button>Sign Up</button>
          </Link>
        </form>
      </div>
    );
  }
}
