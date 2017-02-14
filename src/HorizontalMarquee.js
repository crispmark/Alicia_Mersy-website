import React, { Component } from 'react';
import "./App.css";


class HorizontalMarquee extends Component {

      render() {

        var direction = ["left", "right"];

        let imgsToDisplay = [
          { key: 1, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,w_1000/v1487098400/ZS8D43191_xbmovn.jpg"},
          { key: 2, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487098400/IMG_3914_f5wua5.jpg"},
          { key: 3, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487098400/tumblr_inline_o6e5ne6bgD1rnaui6_500_isdxkh.jpg"},
          { key: 4, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487098394/IMG_6123_2_yie2ue.jpg"},
          { key: 5, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487098387/IMG_3789_akd1nm.jpg"},
          { key: 6, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487098385/IMG_3827_hcr44d.jpg"},
          { key: 7, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487098375/IMG_1062_hrgptg.jpg"},
          { key: 8, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487098379/IMG_2568_zwejlz.jpg"},
        ];


      return (

          <div className="marquee">
            <marquee direction={direction[Math.floor(direction.length * Math.random())]}>

            {imgsToDisplay.map((ele) =>
              <span key={ele.key}>
              <img src={ele.source} />
              </span>
            )}

            </marquee>
          </div>
          );

        }
}

export default HorizontalMarquee;
