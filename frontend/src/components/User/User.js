import React from "react";
import axios from "axios";

import "./User.css";
import user_avatar from "./avatar/user-profile-avatar.png";

export default class User extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.getOne = this.getOne.bind(this);
    this.renderUser = this.renderUser.bind(this);
  }

  getOne = id => this.state.users.find(user => user.id === id);

  renderUser = () => {
    const { id } = this.props.match.params;
    const user = this.state.users.find(user => user.id === Number(id));
    if (!user) {
      return <div> Could not find user </div>;
    } else {
      return (
        <>
          <div className="user-profile-container">
            <img src={user_avatar} alt="user avatar" className="user-avatar" />
            <br />
            u/{user.username} <br /> <br />
            Karma: 281,938 <br />
            Cake Day: {user.created_at} <br />
          </div>
        </>
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
    this.renderUser();
  }

  render() {
    return <>{this.renderUser()}</>;
  }
}
