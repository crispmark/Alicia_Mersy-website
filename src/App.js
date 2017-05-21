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



class App extends Component {




    render() {

      function monitorScroll(){
        console.log("this is in the scroll");
      }

      monitorScroll()


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
