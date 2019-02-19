import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class Post extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("/posts")
      .then(res => res.json())
      .then(data =>
        this.setState({ posts: data.data }, () =>
          console.log("successfully fetched all posts", this.state.posts)
        )
      );
  }

  render() {
    return (
      <>
        <div className="postTitle">List of posts: </div>
        {this.state.posts.map(post => {
          return (
            <div>
              Post - body: {post.body} <br /> Post - user_id: {post.user_id}{" "}
              <br /> Post - upcroaks: {post.upcroaks} <br /> Post - downcroaks:{" "}
              {post.downcroaks} <br /> <br />
            </div>
          );
        })}
        {/* <Route exact path="/users" render={this.renderUserList} /> */}
      </>
    );
  }
}
