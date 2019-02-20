import React, { Component } from "react";
import "./User.css";

export default class User extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(data =>
        this.setState({ users: data.data }, () =>
          console.log("successfully fetched all users", this.state.users)
        )
      );
  }

  render() {
    return (
      <>
        <div className="userTitle">List of users: </div>
        {this.state.users.map(user => {
          return (
            <div>
              User - username: {user.username} <br /> User - email: {user.email}{" "}
              <br /> User - karma: {user.karma} <br /> <br />
            </div>
          );
        })}
      </>
    );
  }
}
