import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';




class video_component extends Component {

      render() {


      return (

        <div className="video_component">

          <video width="320" height="240" autoplay>
            <source src="vid/a1.mp4" type="video/mp4"></source>
          </video>


       </div>

          );

        }
}

export default video_component;
