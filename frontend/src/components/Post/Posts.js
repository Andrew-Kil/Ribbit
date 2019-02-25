import React, { Component } from "react";

export default class Post extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data.data }));
  }

  render() {
    return (
      <>
        <div className="postTitle">List of posts: </div>
        <br />
        {this.state.posts.map(post => {
          return (
            <div>
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
