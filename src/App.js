import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBar from './NavBar.js'
import FixedImgs from './FixedImgs.js'
import Home from "./Home.js"
import FixedComponentsA from "./FixedComponentsA.js";
import FixedComponents2 from "./FixedComponents2.js";
import FixedComponents3 from "./FixedComponents3.js";
import TypeWriter from 'react-typewriter';
import video_component1 from "./video_component1.js";
import secondBackground from "./secondBackground.js"
import thirdBackground from "./thirdBackground.js"
import fourthBackground from "./fourthBackground.js"
import fifthBackground from "./fifthBackground.js"
import bioBackground from "./bioBackground.js"



class App extends Component {


    render() {


        return(

            <div className="full-page">

              <NavBar></NavBar>

              <FixedImgs></FixedImgs>



              <FixedComponentsA></FixedComponentsA>
              <FixedComponents2></FixedComponents2>
              <FixedComponents3></FixedComponents3>


              {this.props.children}

            </div>
            )
    }
}

export default App;
