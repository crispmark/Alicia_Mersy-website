import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';




class video_component extends Component {

      render() {


      return (

        <div className="video_component">
          <video autoPlay="autoPlay">
            <source src="https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1490139070/a1_u3b6oq.mp4" type="video/mp4" />

          </video>
       </div>

          );

        }
}

export default video_component;
