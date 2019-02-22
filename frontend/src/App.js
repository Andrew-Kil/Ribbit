import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import "./App.css";

import Home from "./components/Home/Home.js";
import User from "./components/User/User.js";
import Post from "./components/Post/Post.js";
import Comment from "./components/Comment/Comment.js";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import Punny from "./components/Subribbits/Punny.js";
import Subribbits from "./components/Subribbits/Subribbits.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <div className="main-content">Stufffffff</div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={User} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/comments" component={Comment} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/subribbits" component={Subribbits} />
          <Route path="/r/punny" component={Punny} />
        </Switch>
      </div>
    );
  }
}

export default App;
