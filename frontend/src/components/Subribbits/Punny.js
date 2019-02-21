import React, { Component } from "react";
import axios from "axios";

import CommunityDetails from "../SideBar/CommunityDetails/CommunityDetails.js";

export default class Punny extends Component {
  state = {
    name: "",
    info: "",
    subscribbitors: ""
  };

  componentDidMount() {
    axios
      .get("/subribbits")
      .then(res => {
        const subribbits = res.data.data;
        const punny = subribbits.filter(el => el.name === "punny");

        this.setState(
          {
            name: punny[0].name,
            info: punny[0].info,
            subscribbitors: punny[0].subscribbitors
          },
          () => console.log("SUCCESS ", this.state)
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <CommunityDetails />
      </>
    );
  }
}
