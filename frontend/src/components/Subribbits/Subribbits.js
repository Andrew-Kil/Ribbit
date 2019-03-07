import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CommunityDetails from "../SideBar/CommunityDetails/CommunityDetails.js";

export default class Subribbits extends Component {
  state = {
    subribbits: []
  };

  componentDidMount() {
    axios
      .get("/subribbits")
      .then(res => {
        this.setState({ subribbits: res.data.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div>List of subribbits: </div>
        <br />
        <br />
        {this.state.subribbits.map(subribbit => {
          return (
            <div key={subribbit.id}>
              <Link to={`/subribbits/${subribbit.id}`}>r/{subribbit.name}</Link>
              <br /> <br />
            </div>
          );
        })}
        <CommunityDetails />
      </>
    );
  }
}
