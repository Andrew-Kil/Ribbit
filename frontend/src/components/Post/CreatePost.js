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
    console.log("form submitted");

    const postInfo = {
      title: this.state.title,
      body: this.state.body,
      user_id: this.state.user_id,
      sub_id: this.state.sub_id
    };

    axios
      .post("/posts/create", { postInfo })
      .then(res => {
        this.setState({ posts: res.data.data });
      })
      .catch(err => console.log(err));

    // fetch("/posts/create", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     title: this.state.title,
    //     body: this.state.body,
    //     user_id: this.state.user_id,
    //     sub_id: this.state.sub_id
    //   })
    // });
  };

  //   handleSubmit = (e, data) => {
  //     e.preventDefault();
  //     console.log("form submitted");

  //     function createPost(data) {
  //       return fetch("./posts/create", {
  //         method: "POST",
  //         mode: "CORS",
  //         body: JSON.stringify(data),
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       })
  //         .then(res => {
  //           return res;
  //         })
  //         .catch(err => err);
  //     }

  //     createPost(data);
  //   };

  render() {
    console.log(this.state);

    // function createPost(data) {
    //   return fetch("./posts/create", {
    //     method: "POST",
    //     mode: "CORS",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //     .then(res => {
    //       return res;
    //     })
    //     .catch(err => err);
    // }

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <br />
          <div className="create-a-post-text">Create a post</div>
          <br /> Title
          <div>
            <input
              className="title-input"
              placeholder="Title"
              onChange={this.handleChange}
              name="title"
            />
          </div>{" "}
          <br />
          Text
          <div>
            <textarea
              className="text-input"
              placeholder="Text"
              onChange={this.handleChange}
              name="body"
            />
          </div>
          <div>
            <input
              className="user-id-input"
              placeholder="User ID"
              onChange={this.handleChange}
              name="user_id"
            />
          </div>
          <div>
            <input
              className="sub-id-input"
              placeholder="Sub ID"
              onChange={this.handleChange}
              name="sub_id"
            />
          </div>
          <button type="submit">POST</button>
        </form>
      </div>
    );
  }
}
