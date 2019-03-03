import React from "react";
import { NavLink } from "react-router-dom";

import "./AdSideBar.css";

export default function AdSideBar() {
  return (
    <div>
      <div className="ad-side-bar">
        <div className="ad-side-bar-padding">
          <div className="ad-side-bar-body">
            <div className="ad-side-bar-body-header">Reddit Premium</div>
            <div className="ad-side-bar-body-text">Ads-free browsing</div>
            <div className="ad-side-bar-button">
              <a className="ad-side-bar-get-premium" href="/get-premium">
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
