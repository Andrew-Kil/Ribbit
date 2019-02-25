import React, { Component } from "react";

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

        <div className="postTitle">List of posts: </div>
        <br />

        {this.state.posts.map(post => {
          return (
            <div id={post.id}>
              Title: {post.title} <br />
              Body: {post.body} <br /> User_id: {post.user_id} <br /> Upcroaks:{" "}
              {post.upcroaks} <br /> Downcroaks: {post.downcroaks} <br /> <br />
            </div>
          );
        })}
      </>
    );
  }
}
