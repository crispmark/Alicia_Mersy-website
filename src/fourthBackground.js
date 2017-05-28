import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';



class FourthBackground extends Component {

  constructor(props) {
    super(props);


    this.state = {
      muted: "muted",
      issPosition: []

     };

 }


      render() {

      return (

        <div className="fourthBackground">

            <div className="verticalMarquee1">

                <marquee><p>Knowledge of self is in your DNA - A Queen</p></marquee>

            </div>

          <div className="flex_container">
                <img className="thirdBackground_second_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682471/Alicia_Mersy/worldmapswallpapercollection05.jpg"} />
                <img className="thirdBackground_third_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,w_1200/v1491682211/Alicia_Mersy/IMG_4888.jpg"} />

          </div>

            <img className="fourthBackground_second_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682350/Alicia_Mersy/medical-logo-png-28.png"} />
              <img className="fourthBackground_third_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1493767292/magnetics_tn5nyo.png"} />

                <div className="fourthBackground_fixed1">
                  <p><TypeWriter typing={1}>_There will be a contour make up tutorial video, a few internet cafe prints, a heat dish parabolic electric heater, Vaseline, Sufism rituals, cable ties, warped 3d baby blue metallic textures and Lord concentrated musk.</TypeWriter></p>
                </div>


                <div className="video_container second_video">
                  <video autoPlay="autoPlay" muted loop>
                    <source src="https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1490150912/AMAN_AMAN_WINE_SLOW_m1i7az.mp4" type="video/mp4" />
                  </video>
              </div>



        </div>


          );

        }
}



export default FourthBackground;
