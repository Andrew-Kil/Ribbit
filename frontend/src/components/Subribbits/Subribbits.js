import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CommunityDetails from "../SideBar/CommunityDetails/CommunityDetails.js";

// import Subribbit from "./Subribbit";

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
        <div>(Click on subribbit to get more info)</div>
        <br />
        {this.state.subribbits.map(subribbit => {
          return (
            <div key={subribbit.id}>
              Name: {""}
              <Link to={`/subribbits/${subribbit.id}`}>{subribbit.name}</Link>
              <br /> <br />
            </div>
          );
        })}
        <CommunityDetails />
      </>
    );
  }
}
