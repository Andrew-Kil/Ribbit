import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CommunityDetails from "../SideBar/CommunityDetails/CommunityDetails.js";

import Subribbit from "./Subribbit";

export default class SubribbitPosts extends Component {
  state = {
    subribbitPosts: []
  };

  //   getAll = () => this.state.subribbitPosts;

  //   getOne = id => this.state.subribbitPosts.find(post => post.id === id);

  //   renderSubribbit = props => {
  //     const { id } = Number(this.props.match.params.id);
  //     // const id = props.match.params.id
  //     console.log("id: ", id);
  //     console.log(this.state.subribbitPosts);
  //     const subribbit = this.state.subribbitPosts.getOne(id);
  //     console.log(subribbit);
  //     console.log(this.state.subribbitPosts);
  //     debugger;
  //     if (!subribbit) {
  //       return <div> Could not find subribbit </div>;
  //     } else {
  //       return (
  //         <Subribbit
  //           name={subribbit.name}
  //           info={subribbit.info}
  //           subscribbitors={subribbit.subscribbitors}
  //         />
  //       );
  //     }
  //   };

  componentDidMount() {
    const id = Number(this.props.match.params.id);

    axios
      .get(`/subribbits/posts/${id}`)
      .then(res => {
        this.setState({ subribbitPosts: res.data.data });
      })
      .catch(err => console.log(err));
    // this.renderSubribbit();
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

        {this.state.subribbitPosts.map(post => {
          return (
            <>
              <div key={post.id} className="post-field">
                <Link
                  to={`/subribbits/${post.sub_id}`}
                  className="post-subribbit"
                >
                  r/{post.name}
                </Link>
                <Link to={`/users/${post.user_id}`} className="post-ribbitor">
                  Posted by{" "}
                  <span className="ribbitor-link">u/{post.username}</span>
                </Link>
                <span className="post-creation">{post.created_at}</span>
                <br />
                <br />
                <Link to={`/posts/${post.id}`} className="post-title">
                  {post.title}
                </Link>{" "}
                <br />
                <br />
                {post.body} <br />
                <br /> <br />
                <Link to={`/posts/${post.id}`} className="post-comments">
                  Comments
                </Link>
              </div>
              <div className="post-field-spacing" />
            </>
          );
        })}

        {/* <CommunityDetails /> */}
        <div>
          <div className="community-details-side-bar">
            <div className="community-details-side-bar-padding">
              <div className="community-details-side-bar-banner">
                COMMUNITY DETAILS
              </div>
              <div className="community-details-side-bar-logo">
                <div className="community-details-side-bar-subribbit-text">
                  r/Punny
                </div>
              </div>
              <div className="community-details-side-bar-body-text">
                Welcome to r/Punny! This is the place to share all your punny
                puns.
              </div>
              <div className="community-details-side-bar-buttons">
                <a
                  className="community-details-side-bar-subscribe-button"
                  href="/subscribe"
                >
                  Subscribe
                </a>
                <a
                  className="community-details-side-bar-create-post-button"
                  href="/create-post"
                >
                  Create Post
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
