import React, { Component } from 'react';


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


    return (
        <div className="NavBarHeader">
          <button>aliciamersy@gmail.com</button>
        </div>

      );

  }
}

export default NavBar;
