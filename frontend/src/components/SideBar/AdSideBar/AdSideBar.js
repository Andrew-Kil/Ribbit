import React from "react";

import "./AdSideBar.css";

import ad from "./geico-ad.jpg";

export default function AdSideBar() {
  return (
    <div>
      <div className="ad-side-bar">
        <div className="ad-side-bar-padding">
          <div className="ad-side-bar-body">
            <div className="ad-side-bar-body-header">ADVERTISEMENT</div>
            <br />
            <img src={ad} alt="geico ad" className="ad" />
          </div>
        </div>
      </div>
    </div>
  );
}
