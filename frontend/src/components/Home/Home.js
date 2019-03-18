import React from "react";
import "./Home.css";
import HomeSideBar from "../SideBar/HomeSideBar/HomeSideBar.js";
import AboutSideBar from "../SideBar/AboutSideBar/AboutSideBar.js";
import AdSideBar from "../SideBar/AdSideBar/AdSideBar.js";
import RibbitPremium from "../SideBar/RibbitPremium/RibbitPremium.js";

import Posts from "../Post/Posts.js";

import trending from "./trending.png";
import lbj from "./lbj.jpeg";
import movie from "./movie.png";
import gordon from "./gordon.jpeg";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="body-container">
          <div className="trending-today">Trending today</div>
          <div className="trending-container">
            <div className="trending-content-container">
              <div className="trending-content-2">
                <a href="/posts/7">
                  <div className="trending-content-box">
                    <img src={movie} alt="trending" className="trending" />
                    <h4 className="trending-content-box-text">Best Films</h4>
                  </div>
                </a>
              </div>
              <div className="trending-content-1">
                <a href="/posts/4">
                  <div className="trending-content-box">
                    <img src={gordon} alt="trending" className="trending" />
                    <h4 className="trending-content-box-text">Gordon Ramsay</h4>
                  </div>
                </a>
              </div>

              <div className="trending-content-4">
                <a href="/posts/6">
                  <div className="trending-content-box">
                    <img src={trending} alt="trending" className="trending" />
                    <h4 className="trending-content-box-text">
                      Breaking News!
                    </h4>
                  </div>
                </a>
              </div>
              <div className="trending-content-3">
                <a href="/posts/9">
                  <div className="trending-content-box">
                    <img src={lbj} alt="trending" className="trending" />
                    <h4 className="trending-content-box-text">LeBron James</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="content-container">
            <div className="main-content-container">
              <div className="welcome">
                <h1 className="welcome-title">Welcome to Ribbit!</h1>
                <span className="welcome-description">
                  Come for the frogs, stay for the dank memes.
                </span>
                <a className="become-a-ribbitor" href="/signup">
                  Become a ribbitor
                </a>
              </div>
              <div className="popular-posts">Popular posts</div>
              <br />
              <div className="post-container">
                <Posts />
              </div>
            </div>

            <div className="side-bar">
              <HomeSideBar />
              <AdSideBar />
              <RibbitPremium />
              <AboutSideBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
