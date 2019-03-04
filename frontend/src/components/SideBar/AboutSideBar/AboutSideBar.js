import React from "react";
import { NavLink } from "react-router-dom";

import "./AboutSideBar.css";

export default function AboutSideBar() {
  return (
    <div>
      <div className="about-side-bar">
        <div className="about-side-bar-padding">
          <div className="about-side-bar-body">
            <div className="about-side-bar-body-header">Reddit Premium</div>
            <div className="about-side-bar-body-text">Ads-free browsing</div>
            <div className="about-side-bar-button">
              <a className="about-side-bar-get-premium" href="/get-premium">
                Get Premium
              </a>
            </div>
            <br />
            Routes:
            <div className="routes">
              <NavLink to={"/users"}>
                <span className="route-links">Users</span>
              </NavLink>
              <NavLink to={"/posts"}>
                <span className="route-links">Posts</span>
              </NavLink>
              <NavLink to={"/comments"}>
                <span className="route-links">Comments</span>
              </NavLink>
              <NavLink to={"/subribbits"}>
                <span className="route-links">Subribbits</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
