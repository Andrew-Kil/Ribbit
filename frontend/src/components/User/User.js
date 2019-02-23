import React, { Component } from "react";
import axios from "axios";

export default class User extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("/users")
      .then(res => {
        this.setState({ users: res.data.data }, () =>
          console.log("GOT ALL USERS: ", this.state.users)
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div className="userTitle">List of users: </div>
        {this.state.users.map(user => {
          return (
            <div>
              Username: {user.username}
              <br /> Password: {user.password_digest}
              <br /> Email: {user.email} <br /> <br />
            </div>
          );
        })}
      </>
    );
  }
}
