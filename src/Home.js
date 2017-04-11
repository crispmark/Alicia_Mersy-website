import React, { Component } from 'react';
import "./App.css";
import HorizontalMarquee from "./HorizontalMarquee.js"
import Watch from "./ScrollMonitor.js"
import FixedComponentsA from "./FixedComponentsA.js"
import FixedImgs from "./FixedImgs.js"


class Home extends Component {



render() {



let imgsToDisplay1 = [
  { key: 1, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026121/background_1_vqjmfz.jpg"},
  { key: 2, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682476/Alicia_Mersy/waterfall-hd-1366x768.jpg"},
  { key: 3, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026123/background_3_kxkmgn.jpg"},
  { key: 4, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026129/background_4_shheba.jpg"},
  { key: 5, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026126/background_5_r34mvo.jpg"}
];

let imgsToDisplay2 = [
  { key: 6, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026125/background_6_fmmov8.jpg"},
  { key: 7, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026129/background_7_befcpo.jpg"},
  { key: 8, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026140/background_8_lo0vze.jpg"},
  { key: 9, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026130/background_9_bezdbv.jpg"},
  { key: 10, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026133/background_10_cnai6t.jpg"},
];

let imgsToDisplay3 = [
  { key: 11, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026138/background_18_vcwlmd.png"},
  { key: 12, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026129/background_11_x5ob78.jpg"},
  { key: 13, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681972/Alicia_Mersy/DSC06380.jpg"},
  { key: 14, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681724/Alicia_Mersy/DSC06292.jpg"},
  { key: 15, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681919/Alicia_Mersy/DSC09039.jpg"},
]

let imgsToDisplay4 = [
  { key: 16, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681753/Alicia_Mersy/IMG_2062.jpg"},
  { key: 17, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681853/Alicia_Mersy/DSC09024.jpg"},
  { key: 18, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682351/Alicia_Mersy/IMG_9939.jpg"},
  { key: 19, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681617/Alicia_Mersy/DSC02510.jpg"},
  { key: 20, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491681765/Alicia_Mersy/DSC02701.jpg"},
]


function randomize(list, randomized=[]) {
    if (list.length < 1) {
        return randomized;
    }

    const index = Math.floor(Math.random()*list.length);
    const pick = list[index];

    const remaining = list.slice(0, index).concat(list.slice(index + 1));
    return randomize(remaining, randomized.concat([pick]));
}

var randomizedArray1 = randomize(imgsToDisplay1);
var randomizedArray2 = randomize(imgsToDisplay2);
var randomizedArray3 = randomize(imgsToDisplay3);
var randomizedArray4 = randomize(imgsToDisplay4);


return (


    <div>
          <FixedImgs></FixedImgs>

          <div className="first_background">
            <div className="marquee_div_right">
          </div>
            <img src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1490156377/cosmic_spheres_c_tdarne.jpg"} />
          </div>

          {randomizedArray1.map((ele) =>
            <div key={ele.key}>
            <HorizontalMarquee></HorizontalMarquee>
            <div className="photo-content">
              <div>
                <img src={ele.source} />
              </div>
            </div>
            </div>
          )}

          <div className="second_background">
            <p>_“If you are irritated by every rub, how will your mirror be polished?” Sufi Master</p>
            <img src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1490142959/tumblr_nkf9ebZzTV1tvhjyno1_1280_l1y4r4.jpg"} />

          </div>

            {randomizedArray3.map((ele) =>
              <div key={ele.key}>
              <div className="photo-content">
              <img src={ele.source} />
              </div>
                <HorizontalMarquee></HorizontalMarquee>
              </div>
            )}

            <div className="second_background">
              <p>2</p>
              <img src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1490142959/tumblr_nkf9ebZzTV1tvhjyno1_1280_l1y4r4.jpg"} />

            </div>

            {randomizedArray3.map((ele) =>
              <div key={ele.key}>
              <div className="photo-content">
              <img src={ele.source} />
              </div>
                <HorizontalMarquee></HorizontalMarquee>
              </div>
            )}

            <div className="second_background">
              <p>3</p>
              <img src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1490142959/tumblr_nkf9ebZzTV1tvhjyno1_1280_l1y4r4.jpg"} />

            </div>

            {randomizedArray4.map((ele) =>
              <div key={ele.key}>
              <div className="photo-content">
              <img src={ele.source} />
              </div>
                <HorizontalMarquee></HorizontalMarquee>
              </div>
            )}



        </div>
    );

  }
}

export default Home;



// <video autoPlay="autoPlay">
//   <source src="https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1490139070/a1_u3b6oq.mp4" type="video/mp4" />
//
// </video>
