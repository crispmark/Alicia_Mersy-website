import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';


class NavBar extends Component {

  constructor(){
    super();
    this.state = {
      showComponent: false

    }
  }

  // getInitialState() {
  //      return {
  //          showComponent: false
  //      };
  //  }

   changeVisibility (){

       this.setState({
         showComponent: !this.state.showComponent
       });
   }


  render() {



    if(this.state.showComponent === false){

      return (
        <div className="NavBarHeader">
          <button onClick={this.changeVisibility.bind(this)}><Link to="video">video</Link></button>
          <button>{"https://vimeo.com/115724046"}</button>
          <button>aliciamersy@gmail.com</button>
        </div>

      );

    }
    else {

      return (
        <div className="NavBarHeader">
          <button onClick={this.changeVisibility.bind(this)}><Link to="/">video</Link></button>
          <button>{"https://vimeo.com/115724046"}</button>
          <button>aliciamersy@gmail.com</button>
        </div>

      );


    }

  }
}

export default NavBar;
