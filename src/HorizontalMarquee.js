import React, { Component } from 'react';
import "./App.css";
var Marquee = require('react-marquee');



class HorizontalMarquee extends Component {

      render() {

        var direction = ["left", "right"];

        let imgsToDisplay = [
          { key: 1, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682432/Alicia_Mersy/solar-panels-in-the-desert.jpg"},
          { key: 2, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098400/tumblr_inline_o6e5ne6bgD1rnaui6_500_isdxkh.jpg"},
          { key: 3, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098400/IMG_3914_f5wua5.jpg"},
          { key: 4, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487357448/Screen_Shot_2016-04-22_at_1.11.03_PM_tvgprx.png"},
          { key: 5, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682214/Alicia_Mersy/IMG_5295.jpg"},
          { key: 8, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098387/IMG_3789_akd1nm.jpg"},
          { key: 9, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682284/Alicia_Mersy/IMG_7298.jpg"},
          { key: 11, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487353470/3d-Backgrounds-1080p_dtvhsm.jpg"},
          { key: 12, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487353471/DSC06039_fxqw3y.jpg"},
          { key: 13, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487353470/5889983035_7f1e3199e5_b_b2yf9g.jpg"},
          { key: 14, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487353470/cosmic_spheres_c_iqzoys.jpg"},
          { key: 15, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682262/Alicia_Mersy/IMG_6199.jpg"},
          { key: 16, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098399/IMG_4633_mulaeh.jpg"},
          { key: 18, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682129/Alicia_Mersy/IMG_4558.jpg"},
          { key: 19, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681508/Alicia_Mersy/IMG_0764.jpg"},
          { key: 20, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682458/Alicia_Mersy/tumblr_nagi6xn0kw1tg5hkao1_1280.jpg"},
          { key: 21, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682401/Alicia_Mersy/Screen_Shot_2015-05-20_at_5.19.37_PM.png"},
          { key: 22, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681654/Alicia_Mersy/IMG_1922.jpg"},
          { key: 23, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681700/Alicia_Mersy/IMG_1987.jpg"},
          { key: 24, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681705/Alicia_Mersy/DSC06015.jpg"},
          { key: 25, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682254/Alicia_Mersy/IMG_4971.jpg"},
          { key: 26, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682121/Alicia_Mersy/IMG_4633.jpg"},
          { key: 27, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681425/Alicia_Mersy/IMG_0234.jpg"},
          { key: 28, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681539/Alicia_Mersy/IMG_0846.jpg"},
          { key: 29, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681656/Alicia_Mersy/IMG_1266.jpg"},
          { key: 30, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681748/Alicia_Mersy/IMG_1781.jpg"},
          { key: 31, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681678/Alicia_Mersy/IMG_1990.jpg"},
          { key: 32, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681728/Alicia_Mersy/IMG_2071.jpg"},
          { key: 33, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682170/Alicia_Mersy/IMG_4913.jpg"},
          { key: 34, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681866/Alicia_Mersy/IMG_2158.jpg"},
          { key: 36, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681926/Alicia_Mersy/IMG_2504.jpg"},
          { key: 37, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682243/Alicia_Mersy/IMG_6107.jpg"},
          { key: 38, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681500/Alicia_Mersy/IMG_1484.jpg"},
          { key: 39, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681500/Alicia_Mersy/IMG_1484.jpg"},
          { key: 40, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682006/Alicia_Mersy/IMG_2673.jpg"},
          { key: 41, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681991/Alicia_Mersy/IMG_2816.jpg"},
          { key: 42, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681958/Alicia_Mersy/IMG_3093.jpg"},
          { key: 43, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681981/Alicia_Mersy/IMG_3111.jpg"},
          { key: 44, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682034/Alicia_Mersy/IMG_3126.jpg"},
          { key: 45, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682028/Alicia_Mersy/IMG_3362.jpg"},
          { key: 46, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682075/Alicia_Mersy/IMG_3404.jpg"},
          { key: 47, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682329/Alicia_Mersy/IMG_7450.jpg"},
          { key: 48, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682051/Alicia_Mersy/IMG_4018.jpg"},
          { key: 49, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682051/Alicia_Mersy/IMG_4018.jpg"},
          { key: 50, source: "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682152/Alicia_Mersy/IMG_4450.jpg"},
          { key: 51, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681866/Alicia_Mersy/IMG_2027.jpg"},
          { key: 52, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682339/Alicia_Mersy/IMG_7429_copy.jpg"},
          { key: 53, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682321/Alicia_Mersy/IMG_8432.jpg"},
          { key: 54, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682379/Alicia_Mersy/Screen_Shot_2015-10-07_at_2.59.33_PM.png"},
          { key: 55, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682289/Alicia_Mersy/IMG_6698.jpg"}


        ];


        function randomize(list, randomized=[]) {
            if (list.length < 1) {
                return randomized;
            }

            const index = Math.floor(Math.random()*list.length);
            const pick = list[index];

            const remaining = list.slice(0, index).concat(list.slice(index + 1));
            return randomize(remaining, randomized.concat([pick]));
        }

        var randomizedArray = randomize(imgsToDisplay);


      return (

          <div className="marquee">


            <marquee direction={direction[Math.floor(direction.length * Math.random())]}>

            {randomizedArray.map((ele) =>
              <span key={ele.key}>
              <img className={"img_marquee"} src={ele.source} />
              </span>
            )}

            </marquee>

          </div>
          );

        }
}

export default HorizontalMarquee;
