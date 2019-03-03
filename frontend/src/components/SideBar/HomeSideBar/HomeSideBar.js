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
              <span className="home-side-bar-home-text">r/popular</span>
            </div>
            <div className="home-side-bar-body-text">
              The best posts on Ribbit for you, pulled from the most active
              communities on Reddit. Check here to see the most shared, upvoted,
              and commented content on the internet.
            </div>
            <div className="home-side-bar-buttons">
              <a className="home-side-bar-create-post-button" href="/signup">
                Create Post
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
