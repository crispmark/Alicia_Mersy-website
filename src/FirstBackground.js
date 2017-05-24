import React, { Component } from 'react';


class FirstBackground extends Component {

      render() {

        var smallImg={
          width: "20%"
        }

      return (

        <div>
              <FixedImgs></FixedImgs>

                <div className="verticalMarquee1">

                    <marquee><p>Knowledge of self is in your DNA - A Queen</p></marquee>

                </div>

              <div className="firstBackground">

                <img src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1490156377/cosmic_spheres_c_tdarne.jpg"} />

              </div>

          );

        }
}



export default FirstBackground;
