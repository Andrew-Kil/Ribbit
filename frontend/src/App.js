import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import HomeSideBar from "./components/SideBar/HomeSideBar.js";
import AdSideBar from "./components/SideBar/AdSideBar.js";
import "./App.css";

import User from "./components/User/User.js";
import Post from "./components/Post/Post.js";
import Comment from "./components/Comment/Comment.js";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <div className="main-content">Stufffffff</div> */}
        <Switch>
          <Route exact path="/users" component={User} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/comments" component={Comment} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <div className="side-bar">
          <HomeSideBar />
          <AdSideBar />
        </div>

        <div className="join-the-discussion">
          <h1 className="join-the-discussion-title">Join the discussion</h1>
          <span class="join-the-discussion-description">
            Come for the cats, stay for the empathy.
          </span>
          <a class="become-a-ribbitor" href="/signup">
            Become a ribbitor
          </a>
        </div>
      </div>
    );
  }
}

export default App;
