import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CommunityDetails from "../SideBar/CommunityDetails/CommunityDetails.js";

import User from "./User.js";

export default class Users extends Component {
  state = {
    users: []
  };

  getAll = () => this.state.users;

  getOne = id => this.state.users.find(user => user.id === id);

  renderUser = props => {
    const { id } = props.match.params;
    const user = this.state.users.getOne(id);
    if (!user) {
      return <div> Could not find user</div>;
    } else {
      return (
        <User
          username={user.username}
          password={user.password_digest}
          email={user.email}
        />
      );
    }
  };

  componentDidMount() {
    axios
      .get("/users")
      .then(res => {
        this.setState({ users: res.data.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div className="userTitle">List of users: </div>
        <br />
        <div>(Click on user to get more info)</div>
        <br />
        {this.state.users.map(user => {
          return (
            <div key={user.id}>
              Username: {""}
              <Link to={`/users/${user.id}`}>{user.username}</Link>
              <br />
              <br />
            </div>
          );
        })}
        <CommunityDetails />
      </>
    );
  }
}
