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
      return <div> could not find subribbit </div>;
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

  //   renderPetList = () => {
  //     const pets = petAPI.getAll();
  //     return <PetList pets={pets} />;
  //   };

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
              Subribbits - name: {subribbit.name} <br /> Subribbits - info:{" "}
              {subribbit.info} <br /> Subribbits - subscribbitors:{" "}
              {subribbit.subscribbitors} <br /> <br />
            </div>
          );
        })}
        <CommunityDetails />
      </>
    );
  }
}
