import React from "react";
import "./Home.css";
import HomeSideBar from "../SideBar/HomeSideBar/HomeSideBar.js";
import AdSideBar from "../SideBar/AdSideBar/AdSideBar.js";

import Posts from "../Post/Posts.js";

import lilypad from "./lilypad.png";
import pond from "./pond.png";
import frog from "./frog.jpg";
import frogvstoad from "./frogvstoad.png";

export default class Home extends React.Component {
  render() {
    // console.log(this.props);
    console.log(this.props);
    return (
      <div>
        <div className="body-container">
          <div className="trending-today">Trending today</div>
          <div className="trending-container">
            <div className="trending-content-container">
              <div className="trending-content-1">
                <a href="/posts/5">
                  <div className="trending-content-box">
                    <img src={lilypad} alt="lilypad" className="lilypad" />
                    <h2 className="trending-content-box-text">Lilypads</h2>
                  </div>
                </a>
              </div>
              <div className="trending-content-2">
                <a href="/pondpics">
                  <div className="trending-content-box">
                    <img src={pond} alt="pond" className="pond" />
                    <h2 className="trending-content-box-text">Pond pictures</h2>
                  </div>
                </a>
              </div>
              <div className="trending-content-3">
                <a href="/whatthefrog">
                  <div className="trending-content-box">
                    <img src={frog} alt="frog" className="kingfrog" />
                    <h2 className="trending-content-box-text">
                      What the frog?
                    </h2>
                  </div>
                </a>
              </div>
              <div className="trending-content-4">
                <a href="/frogvstoad">
                  <div className="trending-content-box">
                    <img
                      src={frogvstoad}
                      alt="frogvstoad"
                      className="frogvstoad"
                    />
                    <h2 className="trending-content-box-text">
                      Frogs vs Toads
                    </h2>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="content-container">
            <div className="main-content-container">
              <div className="join-the-discussion">
                <h1 className="join-the-discussion-title">
                  Welcome to Ribbit!
                </h1>
                <span className="join-the-discussion-description">
                  Come for the frogs, stay for the dank memes.
                </span>
                <a className="become-a-ribbitor" href="/signup">
                  Become a ribbitor
                </a>
              </div>
              <div className="popular-posts">Popular posts</div>

              <div className="post-container">
                <Posts />
                {/* {this.props.data.posts.map(post => {
                  return (
                    <div id={post.id}>
                      <div>{this.props.data.title}</div>
                      <div>{this.props.data.body}</div>
                      <div>{this.props.data.user_id}</div>
                      <div>{this.props.data.upcroaks}</div>
                      <div>{this.props.data.downcroaks}</div>
                    </div>
                  );
                })} */}
                {/* <div>{this.props.data.title}</div>
                <div>{this.props.data.body}</div>
                <div>{this.props.data.user_id}</div>
                <div>{this.props.data.upcroaks}</div>
                <div>{this.props.data.downcroaks}</div> */}
              </div>
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
}
