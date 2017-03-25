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
          <button onClick={this.changeVisibility.bind(this)}><Link to="iwsiwi_teaser">IWSIWY TEASER</Link></button>
          <button onClick={this.changeVisibility.bind(this)}><Link to="aman_aman">AMAN AMAN (WINE SLOW)</Link></button>
          <button>aliciamersy@gmail.com</button>
        </div>

      );

    }
    else {

      return (
        <div className="NavBarHeader">
          <button onClick={this.changeVisibility.bind(this)}><Link to="/">IWSIWY TEASER</Link></button>
          <button onClick={this.changeVisibility.bind(this)}><Link to="/">AMAN AMAN (WINE SLOW)</Link></button>


          <button>aliciamersy@gmail.com</button>
        </div>

      );


    }

  }
}

export default NavBar;
