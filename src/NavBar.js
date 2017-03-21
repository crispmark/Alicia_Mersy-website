import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';


class NavBar extends Component {

  render() {
    return (
    <div className="NavBarHeader">
      <button><Link to="video">video</Link></button>
      <button>{"https://vimeo.com/115724046"}</button>
      <button>aliciamersy@gmail.com</button>
    </div>
    );
  }
}

export default NavBar;
