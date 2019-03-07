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
            {/* <img
              src={lilypad}
              alt="lilypad - ribbit premium icon"
              className="lilypad"
            /> */}
            <span className="premium-side-bar-body-header">
              Ribbit Premium <br />
              <span className="premium-side-bar-body-text">
                The best Ribbit experience
              </span>
            </span>
            <div className="premium-side-bar-button">
              <a
                className="premium-side-bar-get-premium"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                <button className="try-premium-button">TRY NOW</button>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
