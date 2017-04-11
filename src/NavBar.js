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

   TriggerPopup() {
         window.open("http://www.viedange.club","mywin","width=800,height=800,screenX=50,left=300,screenY=50,top=200,status=yes,menubar=yes");
   }


  render() {


    return (
        <div className="NavBarHeader">
          <button onClick={this.TriggerPopup}>INFOS</button>
          <button>aliciamersy@gmail.com</button>
        </div>

      );

  }
}

export default NavBar;
