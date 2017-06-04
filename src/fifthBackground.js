import React, { Component } from 'react';



class FifthBackground extends Component {

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

        <div className="fifthBackground">

                    <img className="secondBackground_forth_img" src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1494534218/Alicia_Mersy/atom-nucleus-electrons-hi.png" />


                      <div className="flex_container">
                        <img className="fifthBackground_first_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1494534242/Alicia_Mersy/8-2-waterfall-png-picture.png"} />
                          <img className="fifthBackground_second_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,w_1600/v1491682051/Alicia_Mersy/IMG_4018.jpg"} />
                      </div>

                      <img className="fifthBackground_forth_img" src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1494534229/Alicia_Mersy/KTjXoGdGc.png" />

                        <div className="verticalMarquee">

                            <marquee><p>Knowledge of self is in your DNA - A Queen</p></marquee>

                        </div>

                        <div className="video_container second_video">
                          <video onMouseEnter={this.handleMouseEnter}
                                onMouseLeave={this.handleMouseLeave}
                                autoPlay="autoPlay" muted={this.state.muted} loop>
                            <source src="https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1494547259/QUR_AN_OVER_THE_PRICE_IS_RIGHT_READYMADE_FLATBUSH_sytgpz.mp4" type="video/mp4" />
                          </video>
                      </div>


        </div>


          );

        }
}


export default FifthBackground;
