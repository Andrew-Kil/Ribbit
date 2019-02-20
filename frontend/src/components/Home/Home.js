import React from "react";
import HomeSideBar from "../SideBar/HomeSideBar.js";
import AdSideBar from "../SideBar/AdSideBar.js";

export default function Home() {
  return (
    <div>
      <div className="body-container">
        <div className="content-container">
          <div className="main-content-container">
            <div className="join-the-discussion">
              <h1 className="join-the-discussion-title">Join the discussion</h1>
              <span class="join-the-discussion-description">
                Come for the cats, stay for the empathy.
              </span>
              <a class="become-a-ribbitor" href="/signup">
                Become a ribbitor
              </a>
            </div>
            <div className="popular-posts">Popular posts</div>
          </div>

          <div className="side-bar">
            <HomeSideBar />
            <AdSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
