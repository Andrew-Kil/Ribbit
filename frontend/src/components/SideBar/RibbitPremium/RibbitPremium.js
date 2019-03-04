import React from "react";
// import { NavLink } from "react-router-dom";

import lilypad from "./lilypad.png";

import "./RibbitPremium.css";

export default function RibbitPremium() {
  return (
    <div>
      <div className="premium-side-bar">
        <div className="premium-side-bar-padding">
          <div className="premium-side-bar-body">
            <img
              src={lilypad}
              alt="lilypad - ribbit premium icon"
              className="lilypad"
            />
            <div className="premium-side-bar-body-header">Ribbit Premium</div>
            <div className="premium-side-bar-body-text">
              The best Ribbit experience
            </div>
            <div className="premium-side-bar-button">
              <a className="premium-side-bar-get-premium" href="/get-premium">
                <button className="try-premium-button">TRY NOW</button>
              </a>
            </div>
            <br />
            {/* Routes:
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
