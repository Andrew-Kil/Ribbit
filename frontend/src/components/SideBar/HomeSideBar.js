import React from "react";

import "./HomeSideBar.css";

export default function HomeSideBar() {
  return (
    <div>
      <div className="home-side-bar">
        <div className="home-side-bar-padding">
          <div className="home-side-bar-banner" />
          <div className="home-side-bar-body">
            <div className="home-side-bar-frog">
              <div className="home-side-bar-home-text">Home</div>
            </div>
            <div className="home-side-bar-body-text">
              Your personal Ribbit frontpage. Come here to check in with your
              favorite communities.
            </div>
            <div className="home-side-bar-buttons">
              <a
                className="home-side-bar-create-post-button"
                href="/create-post"
              >
                Create Post
              </a>
              <a
                className="home-side-bar-create-community-button"
                href="/create-community"
              >
                Create Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
