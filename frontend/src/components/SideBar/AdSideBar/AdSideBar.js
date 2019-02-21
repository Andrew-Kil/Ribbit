import React from "react";

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
          </div>
        </div>
      </div>
    </div>
  );
}
