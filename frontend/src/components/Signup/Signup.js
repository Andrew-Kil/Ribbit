import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default class Signup extends Component {
  state = {
    email: "",
    emailVerified: false
  };

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
        <div className="login-banner" />
        <form onSubmit={this.handleSubmit}>
          <div className="login-spacing">
            <h1 className="signup-title">Join the worldwide conversation.</h1>
            <br />
            <p className="signup-description">
              By having a Ribbit account, you can subscribe, vote, and comment
              on all your favorite Ribbit content. <br />
              Sign up in just seconds.
            </p>
            <br />
            <fieldset>
              <Link to="/signupInfo" className="next-button">
                NEXT
              </Link>
            </fieldset>
            <br />
            <div className="text-bottom">
              Already a Ribbitor? {""}
              <a class="link-bottom" href="/login">
                LOG IN
              </a>
            </div>
            <br />
            <p className="user-agreement">
              By signing up, you agree to our {""}
              <a href="https://www.reddit.com/help/useragreement">Terms {""}</a>
              and that you have read our {""}
              <a href="https://www.reddit.com/help/privacypolicy/">
                Privacy Policy {""}
              </a>
              and {""}
              <a href="https://www.reddit.com/help/contentpolicy/">
                Content Policy
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    );
  }
}
