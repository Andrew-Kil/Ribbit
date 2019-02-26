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
            <div key={post.id}>
              Title: {post.title} <br />
              Body: {post.body} <br />
              <Link to={`/users/${post.user_id}`}>User Profile</Link>
              <br />
              <Link to={`/subribbits/${post.sub_id}`}> Subribbit </Link>
              <br /> <br />
            </div>
          );
        })}
      </>
    );
  }
}
