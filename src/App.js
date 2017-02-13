import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBar from './NavBar.js'


class App extends Component {
    render() {
        return(
            <div className="full-page">
              <NavBar></NavBar>
            </div>
            )
    }
}

export default App;
