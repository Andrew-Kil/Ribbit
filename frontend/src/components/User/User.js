import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div>
          Name: {user.username} <br /> Password: {user.password_digest} <br />{" "}
          Email: {user.email}
        </div>
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
    return (
      <>
        {this.renderUser()}
        <Link to="/users">Back to users</Link>
      </>
    );
  }
}
