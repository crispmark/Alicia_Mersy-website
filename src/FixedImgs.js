import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { StickyContainer, Sticky } from 'react-sticky';


class FixedImgs extends Component {





  render() {
    return (



      <div className="FixedImg">

        <img  className="FixedImg1" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487101160/barbed-wire-circle-frame-border-by-gdj-3N6fKn-clipart_bcjpkf.png"} />
        <div className="SmallFixedImgs">
          <img src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487101159/water_PNG3317_tsc2jc.png"} />
        </div>


      </div>




    );
  }
}

export default FixedImgs;


//
// <StickyContainer>
//   <Sticky topOffset={80}>
//     <img src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487101159/water_PNG3317_tsc2jc.png"} />
//   </Sticky>
// </StickyContainer>
