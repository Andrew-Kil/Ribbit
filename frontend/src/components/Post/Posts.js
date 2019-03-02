import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Posts.css";

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
              <div className="post-field">
                <Link
                  to={`/subribbits/posts/${post.sub_id}`}
                  className="post-subribbit"
                >
                  r/{post.name}
                </Link>
                <Link to={`/users/${post.user_id}`} className="post-ribbitor">
                  Posted by{" "}
                  <span className="ribbitor-link">u/{post.username}</span>
                </Link>
                <span className="post-creation">{post.created_at}</span>
                <br />
                <br />
                <Link to={`/posts/${post.id}`} className="post-title">
                  {post.title}
                </Link>{" "}
                <br />
                <br />
                {post.body} <br />
                <br /> <br />
                <Link to={`/posts/${post.id}`} className="post-comments">
                  Comments
                </Link>
              </div>
              <div className="post-field-spacing" />
            </div>
          );
        })}
      </>
    );
  }
}
