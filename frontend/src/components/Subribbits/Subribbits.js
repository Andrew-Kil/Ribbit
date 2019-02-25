import React, { Component } from "react";
import axios from "axios";

import CommunityDetails from "../SideBar/CommunityDetails/CommunityDetails.js";

import SingleSubribbit from "./SingleSubribbit";

export default class Subribbits extends Component {
  state = {
    subribbits: []
  };

  getAll = () => this.state.subribbits;

  getOne = id => this.state.subribbits.find(subribbit => subribbit.id === id);

  renderSubribbit = props => {
    const { id } = props.match.params;
    // const id = props.match.params.id
    console.log("id: ", id);
    const subribbit = this.state.subribbits.getOne(id);
    if (!subribbit) {
      return <div> Could not find subribbit </div>;
    } else {
      return (
        <SingleSubribbit
          name={subribbit.name}
          info={subribbit.info}
          subscribbitors={subribbit.subscribbitors}
        />
      );
    }
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
        {this.state.subribbits.map(subribbit => {
          return (
            <div id={subribbit.id}>
              Name: {""}
              <a href={`http://localhost:3000/subribbits/${subribbit.id}`}>
                {subribbit.name}
              </a>
              <br /> Info: {subribbit.info} <br /> Subscribbitors:{" "}
              {subribbit.subscribbitors} <br /> <br />
            </div>
          );
        })}
        <CommunityDetails />
      </>
    );
  }
}
