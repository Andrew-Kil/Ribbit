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
        {this.state.comments.map(comment => {
          return (
            <div>
              Comment - body: {comment.body} <br /> Comment - user_id:{" "}
              {comment.user_id} <br />
              Comment - post_id: {comment.post_id} <br /> Comment - comment_id:{" "}
              {comment.comment_id}
              <br /> Comment - upcroaks: {comment.upcroaks} <br /> Comment -
              downcroaks: {comment.downcroaks} <br /> <br />
            </div>
          );
        })}
      </>
    );
  }
}
