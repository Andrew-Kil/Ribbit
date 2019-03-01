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
        <div>
          Title: {post.title} <br /> Body: {post.body} <br /> User:{" "}
          {post.user_id} <br />
          Subribbit: {post.sub_id} <br />
        </div>
      );
    }
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(res => {
        this.setState({ posts: res.data.data });
      })
      .catch(err => console.log(err));
    this.renderPost();
  }

  render() {
    console.log(this.state);
    return (
      <>
        {this.renderPost()}
        <Link to="/posts">Back to posts</Link>
      </>
    );
  }
}
