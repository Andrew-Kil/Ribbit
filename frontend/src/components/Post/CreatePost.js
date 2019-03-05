import React, { Component } from "react";
import axios from "axios";

import "./Posts.css";

export default class CreatePost extends Component {
  state = {
    title: "",
    body: "",
    user_id: "",
    sub_id: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post("/posts/create", {
        title: this.state.title,
        body: this.state.body,
        user_id: this.state.user_id,
        sub_id: this.state.sub_id
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <br />
          <div className="create-a-post-text">Create a post</div>
          <br />
          <div>
            <textarea
              className="title-input"
              placeholder="Title"
              onChange={this.handleChange}
              name="title"
              type="text"
            />
          </div>{" "}
          <br />
          <div>
            <textarea
              className="text-input"
              placeholder="Text"
              onChange={this.handleChange}
              name="body"
              type="text"
            />
          </div>
          <br />
          <div id="user-id-field">
            User ID:
            <br />
            <input
              className="user-id-input"
              onChange={this.handleChange}
              name="user_id"
            />
          </div>
          <br />
          <div id="sub-id-field">
            Sub ID:
            <br />
            <input
              className="sub-id-input"
              onChange={this.handleChange}
              name="sub_id"
            />
          </div>
          <br />
          <button type="submit" className="create-post-button">
            POST
          </button>
        </form>
      </div>
    );
  }
}
