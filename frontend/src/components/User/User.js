import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./User.css";

import UserList from "./UserList.js";

export default class User extends Component {
  state = {
    users: [],
    fetchedUsers: false
  };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(data =>
        this.setState({ users: data.data, fetchedUsers: true }, () =>
          console.log("successfully fetched all users", this.state.users)
        )
      );
  }

  // renderUserList = () => {
  //   const { users } = this.state.users;
  //   console.log("RENDER LIST STATE", this.state);
  //   return <UserList users={users} />;

  //   // console.log(this.state.users);
  //   // console.log(this.state.users.username)

  //   // let results = this.state.users.map(user => {
  //   //   return <div key={user.id}>{user.username}</div>;
  //   // });
  //   // console.log(results);
  //   // return results;
  // };

  render() {
    console.log("user");
    console.log(this.state.users);
    console.log(this.state.fetchedUsers);

    if (this.state.fetchedUsers) {
      return (
        <>
          <div className="userTitle">List of users: </div>
          {this.state.users.map(user => {
            return (
              <div>
                {user.username} - {user.email} - {user.karma}
              </div>
            );
          })}
          {/* <Route exact path="/users" render={this.renderUserList} /> */}
        </>
      );
    } else {
      return null;
    }
  }
}
