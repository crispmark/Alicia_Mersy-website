import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBar from './NavBar.js'
import FixedImgs from './FixedImgs.js'
import Home from "./Home.js"
import FixedComponentsA from "./FixedComponentsA.js";
import FixedComponents2 from "./FixedComponents2.js";
import FixedComponents3 from "./FixedComponents3.js";
import TypeWriter from 'react-typewriter';
import video_component from "./video_component.js"


class App extends Component {
    render() {
        return(
            <div className="full-page">

              <NavBar></NavBar>
              <FixedComponentsA></FixedComponentsA>
              <FixedComponents2></FixedComponents2>
              <FixedComponents3></FixedComponents3>

              <Home></Home>

              {this.props.children}

            </div>
            )
    }
}

export default App;



  // <FixedImgs></FixedImgs>
