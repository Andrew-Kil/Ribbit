import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import CommunityDetails from "../SideBar/CommunityDetails/CommunityDetails.js";

import Subribbit from "./Subribbit";

export default class SubribbitPosts extends Component {
  state = {
    subribbitPosts: []
  };

  getAll = () => this.state.subribbitPosts;

  getOne = id => this.state.subribbitPosts.find(post => post.id === id);

  renderSubribbit = props => {
    const { id } = Number(this.props.match.params.id);
    // const id = props.match.params.id
    console.log("id: ", id);
    const subribbit = this.state.subribbitPosts.getOne(id);
    console.log(subribbit);
    console.log(this.state.subribbitPosts);
    debugger;
    if (!subribbit) {
      return <div> Could not find subribbit </div>;
    } else {
      return (
        <Subribbit
          name={subribbit.name}
          info={subribbit.info}
          subscribbitors={subribbit.subscribbitors}
        />
      );
    }
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(res => {
        this.setState({ subribbitPosts: res.data.data });
        // debugger;
      })
      .catch(err => console.log(err));
    this.renderSubribbit();
  }

  render() {
    console.log(this.state);
    console.log("id: ", this.props.match.params);
    return (
      <>
        {/* <div>List of subribbits: </div>
        <br />
        <div>(Click on subribbit to get more info)</div>
        <br />
        {this.state.subribbits.map(subribbit => {
          return (
            <div id={subribbit.id}>
              Name: {""}
              <Link to={`/subribbits/${subribbit.id}`}>{subribbit.name}</Link>
              <br /> <br />
            </div>
          );
        })}
        <CommunityDetails /> */}
        HOWDY
      </>
    );
  }
}
