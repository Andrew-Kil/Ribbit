import React, { Component } from "react";
import { Link } from "react-router-dom";

// import Home from "../Home/Home.js";

export default class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data.data }));
  }

  render() {
    console.log(this.state);
    return (
      <>
        {/* <Home data={this.state} /> */}

        <br />

        {this.state.posts.map(post => {
          return (
            <div id={post.id}>
              Title: {post.title} <br />
              Body: {post.body} <br />
              {/* User_id: {post.user_id}  */}
              <Link to={`/users/${post.user_id}`}>User Profile</Link>
              <br /> Upcroaks: {post.upcroaks} <br /> Downcroaks:{" "}
              {post.downcroaks} <br /> <br />
            </div>
          );
        })}
      </>
    );
  }
}
