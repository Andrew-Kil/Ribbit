import React, { Component } from "react";
import axios from "axios";

export default class Comment extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    axios
      .get("/comments")
      .then(res => {
        this.setState({
          comments: res.data.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.comments);
    return (
      <>
        <div className="postTitle">List of comments: </div>
        <br />
        {this.state.comments.map(comment => {
          return (
            <div key={comment.id}>
              Comment: {comment.comment} <br /> User_id: {comment.user_id}{" "}
              <br />
              Post_id: {comment.post_id} <br /> Comment_id: {comment.comment_id}
              <br />
              <br />
            </div>
          );
        })}
      </>
    );
  }
}
