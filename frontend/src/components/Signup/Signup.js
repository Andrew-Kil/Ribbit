import React, { Component } from "react";
import "./Signup.css";

export default class Signup extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <h1 className="signup-title">Join the worldwide conversation.</h1>
          <p className="signup-description">
            By having a Ribbit account, you can subscribe, vote, and comment on
            all your favorite Ribbit content. <br />
            Sign up in just seconds.
          </p>
          <fieldset className="email-fieldset">
            <input type="email" name="email" className="signup-input-email" />
            <label class="email-input-label">Email</label>
          </fieldset>
          <fieldset>
            <button type="button" className="next-button">
              NEXT
            </button>
          </fieldset>
          <div className="text-bottom">
            Already a Ribbitor? {""}
            <a class="link-bottom" href="/login">
              Log in
            </a>
          </div>
          <p className="user-agreement">
            By signing up, you agree to our {""}
            <a target="_blank" href="https://www.reddit.com/help/useragreement">
              Terms {""}
            </a>
            and that you have read our {""}
            <a
              target="_blank"
              href="https://www.reddit.com/help/privacypolicy/"
            >
              Privacy Policy {""}
            </a>
            and {""}
            <a
              target="_blank"
              href="https://www.reddit.com/help/contentpolicy/"
            >
              Content Policy
            </a>
            .
          </p>
        </form>
      </div>
    );
  }
}
