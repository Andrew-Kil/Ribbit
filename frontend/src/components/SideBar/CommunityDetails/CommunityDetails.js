import React from "react";

import "./CommunityDetails.css";

export default function CommunityDetails() {
  return (
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
            Welcome to r/Punny! This is the place to share all your punny puns.
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
  );
}
