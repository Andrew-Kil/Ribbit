import React from "react";
import { Link } from "react-router-dom";

const UserList = props => {
  const { users } = props;
  console.log("USER IN USERLIST", users);
  console.log("userlist received");

  const showUsers = () => {
    return users.map(user => {
      let path = `/users/${user.username}/edit`;
      return (
        <Link to={path}>
          <div key={user.id}>{user.username}</div>
        </Link>
      );
    });
  };
  return (
    <div>
      <h1>Xavier 5555</h1>

      {users && showUsers()}
    </div>
  );
};

export default UserList;
