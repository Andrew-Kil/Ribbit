import React, { Component } from "react";
import axios from "axios";

import CommunityDetails from "../SideBar/CommunityDetails/CommunityDetails.js";

export default class Subribbits extends Component {
  state = {
    subribbits: []
  };

  componentDidMount() {
    axios
      .get("/subribbits")
      .then(res => {
        this.setState({ subribbits: res.data.data }, () =>
          console.log("SUCCESS ", this.state)
        );
        debugger;
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div>List of subribbits: </div>
        <br />
        {this.state.subribbits.map(subribbit => {
          return (
            <div>
              Subribbits - name: {subribbit.name} <br /> Subribbits - info:{" "}
              {subribbit.info} <br /> Subribbits - subscribbitors:{" "}
              {subribbit.subscribbitors} <br /> <br />
            </div>
          );
        })}

        {/* <p>{this.state.name}</p>
        <p>{this.state.info}</p>
        <p>{this.state.subscribbitors}</p> */}
        <CommunityDetails />
      </>
    );
  }
}
