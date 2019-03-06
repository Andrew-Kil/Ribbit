import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import chat_icon from "./icons/chat-icon.png";
import up_arrow from "./icons/up-arrow.png";
import down_arrow from "./icons/down-arrow.png";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      posts: []
    };
    this.getOne = this.getOne.bind(this);
    this.renderPost = this.renderPost.bind(this);
  }

  getOne = id => this.state.posts.find(post => post.id === id);

  renderPost = () => {
    console.log(this.state.posts);
    const { id } = this.props.match.params;
    const post = this.state.posts.find(post => post.id === Number(id));
    if (!post) {
      return (
        <div className="post-container">
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
              to={`/subribbits/posts/${this.state.post.sub_id}`}
              className="post-subribbit"
            >
              r/{this.state.post.name}
            </Link>
            <Link
              to={`/users/${this.state.post.user_id}`}
              className="post-ribbitor"
            >
              Posted by{" "}
              <span className="ribbitor-link">
                u/{this.state.post.username}
              </span>
            </Link>
            <span className="post-creation">{this.state.post.created_at}</span>
            <br />
            <br />
            <Link to={`/posts/${this.state.post.id}`} className="post-title">
              {this.state.post.title}
            </Link>{" "}
            <br />
            <br />
            {this.state.post.body} <br />
            <br /> <br />
            <Link to={`/posts/${this.state.post.id}`} className="post-comments">
              <img src={chat_icon} alt="chat icon" className="chat-icon" />
              Comments
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="post-field-spacing" />
          <div className="post-field">
            <Link
              to={`/subribbits/posts/${post.sub_id}`}
              className="post-subribbit"
            >
              r/{post.name}
            </Link>
            <Link to={`/users/${post.user_id}`} className="post-ribbitor">
              Posted by <span className="ribbitor-link">u/{post.username}</span>
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
          </div>
          <div className="post-field-spacing" />
          <div className="post-field-spacing" />
          {this.state.posts.map(post => {
            return (
              <>
                <div key={post.id} className="post-field">
                  <div>User ID: {post.user_id}</div>
                  <div>{post.comment}</div>
                </div>
                {/* <div key={post.id} className="post-field">
                  <Link
                    to={`/subribbits/${post.sub_id}`}
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
                </div> */}
                <div className="post-field-spacing" />
              </>
            );
          })}
        </>
      );
    }
  };

  componentDidMount() {
    this.getPost();
    this.getPosts();
    this.renderPost();
  }

  getPost() {
    const id = Number(this.props.match.params.id);
    axios
      .get(`/posts/post/${id}`)
      .then(res => {
        this.setState({ post: res.data.data });
      })
      .catch(err => console.log(err));
  }

  getPosts() {
    const id = Number(this.props.match.params.id);
    axios
      .get(`/posts/${id}`)
      .then(res => {
        this.setState({ posts: res.data.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <>
        {this.renderPost()}
        <Link to="/">Back to homepage</Link>
      </>
    );
  }
}
