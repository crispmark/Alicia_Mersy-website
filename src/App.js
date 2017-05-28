import React, { Component } from 'react';
import NavBar from './NavBar.js'
import FixedImgs from './FixedImgs.js'
import FixedComponentsA from "./FixedComponentsA.js";
import FixedComponents2 from "./FixedComponents2.js";
import FixedComponents3 from "./FixedComponents3.js";
import axios from 'axios';
require('es6-promise').polyfill();
require('isomorphic-fetch');
var TimerMixin = require('react-timer-mixin');






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
