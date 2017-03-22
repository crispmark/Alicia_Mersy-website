import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';


class NavBar extends Component {

  constructor(){
    super();
    this.state = {
      showComponent: false

    }
  }

   changeVisibility (){

       this.setState({
         showComponent: !this.state.showComponent
       });
   }


  render() {



    if(this.state.showComponent === false){

      return (
        <div className="NavBarHeader">
          <button onClick={this.changeVisibility.bind(this)}><Link to="video">{"https://vimeo.com/115724046"}</Link></button>
          <button>aliciamersy@gmail.com</button>
        </div>

      );

    }
    else {

      return (
        <div className="NavBarHeader">
          <button onClick={this.changeVisibility.bind(this)}><Link to="/">{"https://vimeo.com/115724046"}</Link></button>
          <button>aliciamersy@gmail.com</button>
        </div>

      );


    }

  }
}

export default NavBar;
