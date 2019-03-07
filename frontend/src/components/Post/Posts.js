import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Posts.css";

import chat_icon from "./icons/chat-icon.png";
import up_arrow from "./icons/up-arrow.png";
import down_arrow from "./icons/down-arrow.png";

export default class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(res => {
        this.setState({ posts: res.data.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <br />

        {this.state.posts.map(post => {
          return (
            <div key={post.id} className="post-container">
              <div className="voting-field">
                <button className="croak-button">
                  <img src={up_arrow} alt="upvote arrow" className="upcroak" />
                </button>
                0
                <button className="croak-button">
                  <img
                    src={down_arrow}
                    alt="downvote arrow"
                    className="downcroak"
                  />
                </button>
              </div>
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
                  <img src={chat_icon} alt="chat icon" className="chat-icon" />
                  Comments
                </Link>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
