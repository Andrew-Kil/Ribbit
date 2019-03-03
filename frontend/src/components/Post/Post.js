import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.getOne = this.getOne.bind(this);
    this.renderPost = this.renderPost.bind(this);
  }

  getOne = id => this.state.posts.find(post => post.id === id);

  renderPost = () => {
    console.log(this.props.posts);
    const { id } = this.props.match.params;
    const post = this.state.posts.find(post => post.id === Number(id));
    if (!post) {
      return <div> Could not find post </div>;
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
    this.renderPost();
  }

  getPost() {
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
