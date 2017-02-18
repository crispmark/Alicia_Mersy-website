import React, { Component } from 'react';
import "./App.css";


class HorizontalMarquee extends Component {

      render() {

        var direction = ["left", "right"];

        let imgsToDisplay = [
          { key: 1, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098400/ZS8D43191_xbmovn.jpg"},
          { key: 2, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098400/tumblr_inline_o6e5ne6bgD1rnaui6_500_isdxkh.jpg"},
          { key: 3, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098400/IMG_3914_f5wua5.jpg"},
          { key: 4, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487357448/Screen_Shot_2016-04-22_at_1.11.03_PM_tvgprx.png"},
          { key: 5, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098400/tumblr_nnxzeusf4R1sc30nio1_1280_z03qhy.jpg"},
          { key: 6, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098397/IMG_1170_ccq0et.jpg"},
          { key: 7, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098399/IMG_7168_lwy5z0.jpg"},
          { key: 8, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098387/IMG_3789_akd1nm.jpg"},
          { key: 9, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098391/IMG_3881_geavfo.jpg"},
          { key: 10, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098384/IMG_1151_wtmi0i.jpg"},
          { key: 11, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487353470/3d-Backgrounds-1080p_dtvhsm.jpg"},
          { key: 12, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487353471/DSC06039_fxqw3y.jpg"},
          { key: 13, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487353470/5889983035_7f1e3199e5_b_b2yf9g.jpg"},
          { key: 14, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487353470/cosmic_spheres_c_iqzoys.jpg"},
          { key: 15, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098385/IMG_0770_granhb.jpg"},
          { key: 16, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098399/IMG_4633_mulaeh.jpg"},
          { key: 17, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,h_400/v1487098385/IMG_3827_hcr44d.jpg"},

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
              <img src={ele.source} />
              </span>
            )}

            </marquee>
          </div>
          );

        }
}

export default HorizontalMarquee;
