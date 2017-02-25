import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBar from './NavBar.js'
import FixedImgs from './FixedImgs.js'
import Home from "./Home.js"
import FixedComponents1 from "./FixedComponents1.js";
import FixedComponents2 from "./FixedComponents2.js";
import FixedComponents3 from "./FixedComponents3.js";
import TypeWriter from 'react-typewriter';


class App extends Component {
    render() {
        return(
            <div className="full-page">

              <NavBar></NavBar>
              <FixedImgs></FixedImgs>
              <FixedComponents1></FixedComponents1>
              <FixedComponents3></FixedComponents3>
              <FixedComponents2></FixedComponents2>


              <Home></Home>

            </div>
            )
    }
}

export default App;
