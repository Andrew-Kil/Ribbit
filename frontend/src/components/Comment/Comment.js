import React, { Component } from "react";

export default class Comment extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    fetch("/comments")
      .then(res => res.json())
      .then(data =>
        this.setState({ comments: data.data }, () =>
          console.log("successfully fetched all comments", this.state.comments)
        )
      );
  }

  render() {
    return (
      <>
        <div className="postTitle">List of comments: </div>
        <br />
        {this.state.comments.map(comment => {
          return (
            <div>
              Body: {comment.body} <br /> User_id: {comment.user_id} <br />
              Post_id: {comment.post_id} <br /> Comment_id: {comment.comment_id}
              <br /> Upcroaks: {comment.upcroaks} <br /> Downcroaks:{" "}
              {comment.downcroaks} <br /> <br />
            </div>
          );
        })}
      </>
    );
  }
}
