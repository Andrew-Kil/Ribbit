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
              User - username: {user.username} <br /> User - email: {user.email}{" "}
              <br /> User - karma: {user.karma} <br /> <br />
            </div>
          );
        })}
      </>
    );
  }
}
