import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';



class ThirdBackground extends Component {


  constructor(props) {
    super(props);


      this.state = {
        muted: "muted"
      };


      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);

    }

    handleMouseEnter(){

      this.setState({
        muted: ""
      })

    }

    handleMouseLeave(){
        this.setState({
          muted: "muted"
        })
    }


      render() {

      return (

        <div className="thirdBackground">

        <div className="flex_container">
                <img className="thirdBackground_second_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491682136/Alicia_Mersy/IMG_4623.jpg"} />
                <img className="thirdBackground_third_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491682298/Alicia_Mersy/IMG_6648.jpg"} />
          </div>

          <img className="thirdBackground_forth_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681927/Alicia_Mersy/globe.png"} />
          <img className="thirdBackground_fifth_img" src={"http://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1493767274/cross_a6baxc.png"} />
          <img className="thirdBackground_sixth_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1493767258/crossy_hayegf.png"} />
          <img className="thirdBackground_seventh_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1493767288/diamond_hvxfb7.png"} />

          <div className="thirdBackground_fixed1">
            <p><TypeWriter>_Leave space in your day to pray for the poor, to meditate on empathy. get rid of yourself
              “Breathe 7 times/ when Inhaling take in all the positive energy (PURE) When exhaling take all negative out (TOXIC)”</TypeWriter></p>

          </div>
          <div className="thirdBackground_fixed2">
            <TypeWriter typing={1}>ذِکْر</TypeWriter>
          </div>

          <div className="video_container first_video">
            <video onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                  autoPlay="autoPlay" muted={this.state.muted} loop>
                <source src="http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1490150912/AMAN_AMAN_WINE_SLOW_m1i7az.mp4" type="video/mp4" />
            </video>
        </div>


          </div>


          );

        }
}



export default ThirdBackground;
