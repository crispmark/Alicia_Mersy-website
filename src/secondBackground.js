import React, { Component } from 'react';


class SecondBackground extends React.Component {


  constructor(props) {
    super(props);


      this.state = {
        muted: "muted"
      };


      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);

    }

    handleMouseEnter(){
      console.log("handleMouseEnter");
      console.log("handleMouseEnter");

      this.setState({
  			muted: ""
  		})

    }

    handleMouseLeave(){
      console.log("handleMouseLeave");
        this.setState({
          muted: "muted"
        })
    }

      render() {
      console.log("this is the state" , this.state.muted);
      return (


        <div className="secondBackground">


          <p>_“If you are irritated by every rub, how will your mirror be polished?” Sufi Master</p>
          <img className="secondBackground_first_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1490142959/tumblr_nkf9ebZzTV1tvhjyno1_1280_l1y4r4.jpg"} />

          <div className="flex_container padding_flex">
                <img className="secondBackground_second_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/c_scale,w_1000/v1491682090/Alicia_Mersy/IMG_4451.jpg"} />
                <img className="secondBackground_third_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491682444/Alicia_Mersy/tumblr_inline_nvi8vp8T2O1rnaui6_500.jpg"} />
          </div>

          <div className="video_container">
            <video onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                  autoPlay="autoPlay" muted={this.state.muted} loop>
              <source src="https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1490139070/a1_u3b6oq.mp4" type="video/mp4" />
            </video>
        </div>

        </div>

          );

        }
}



export default SecondBackground;
