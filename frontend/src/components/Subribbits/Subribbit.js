import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Subribbit extends React.Component {
  constructor() {
    super();
    this.state = {
      subribbits: []
    };
    this.getOne = this.getOne.bind(this);
    this.renderSubribbit = this.renderSubribbit.bind(this);
  }

  getOne = id => this.state.subribbits.find(subribbit => subribbit.id === id);

  renderSubribbit = () => {
    const { id } = this.props.match.params;
    const subribbit = this.state.subribbits.find(
      subribbit => subribbit.id === Number(id)
    );
    if (!subribbit) {
      return <div> Could not find subribbit </div>;
    } else {
      return (
        <div>
          Name: {subribbit.name} <br /> Info: {subribbit.info} <br />{" "}
          Subscribbitors: {subribbit.subscribbitors}
        </div>
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
    this.renderSubribbit();
  }

  render() {
    return (
      <>
        {this.renderSubribbit()}
        <Link to="/subribbits">Back to subribbits</Link>
      </>
    );
  }
}
