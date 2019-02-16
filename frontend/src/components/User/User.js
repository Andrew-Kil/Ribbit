import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./User.css";
import axios from "axios";

import UserList from "./UserList.js";

export default class User extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    console.log("hello");
    // https://crossorigin.me/
    axios
      .get("http://localhost:3003/users")
      .then(res => {
        console.log("hi");
        console.log(res);
        debugger;
        let data = res.data;
        this.setState({ users: data });
        console.log(this.state.users);
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderUserList = () => {
    const { users } = this.state;

    return <UserList users={users} />;
  };

  render() {
    console.log("user");
    console.log(this.state);
    return (
      <>
        <div className="userTitle">User Profile</div>
        <Route exact path="/users" render={this.renderUserList} />
      </>
    );
  }
}
