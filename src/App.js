import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBar from './NavBar.js'
import Home from "./Home.js"
import HorizontalMarquee from "./HorizontalMarquee.js"



class App extends Component {
    render() {
        return(
            <div className="full-page">
              <NavBar></NavBar>
              <Home></Home>
            </div>
            )
    }
}

export default App;
