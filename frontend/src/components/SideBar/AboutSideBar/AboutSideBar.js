import React from "react";
import { NavLink } from "react-router-dom";

import "./AboutSideBar.css";

export default function AboutSideBar() {
  return (
    <div>
      <div className="about-side-bar">
        <div className="about-side-bar-container">
          <div className="about-side-bar-body">
            <div className="about-side-bar-column-one">
              <NavLink to={"/about"} className="about-nav-links">
                About
              </NavLink>
              <NavLink to={"/careers"} className="about-nav-links">
                Careers
              </NavLink>
              <NavLink to={"/press"} className="about-nav-links">
                Press
              </NavLink>
            </div>
            <div className="about-side-bar-column-two">
              <NavLink to={"/advertise"} className="about-nav-links">
                Advertise
              </NavLink>
              <NavLink to={"/blog"} className="about-nav-links">
                Blog
              </NavLink>
              <NavLink to={"/help"} className="about-nav-links">
                Help
              </NavLink>
            </div>
            <div className="about-side-bar-column-three">
              <NavLink to={"/redditapp"} className="about-nav-links">
                The Ribbit App
              </NavLink>
              <NavLink to={"/ribbitcoins"} className="about-nav-links">
                Ribbit Coins
              </NavLink>
              <NavLink to={"/ribbitpremium"} className="about-nav-links">
                Ribbit Premium
              </NavLink>
              <NavLink to={"/ribbitgifts"} className="about-nav-links">
                Ribbit Gifts
              </NavLink>
            </div>
            <br />
            {/* <div className="routes">
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
          <br />
          <div className="about-bottom-section">
            Content Policy | Privacy Policy
          </div>
          <div className="about-bottom-section">
            User Agreement | Mod Policy
          </div>
          <div className="about-bottom-section">
            © 2019 Ribbit , Inc. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
