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
  { key: 2, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026123/background_2_xtzrb4.jpg"},
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
  { key: 11, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026138/background_18_vcwlmd.png"},
  { key: 12, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026129/background_11_x5ob78.jpg"}
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

var randomizedArray1 = randomize(imgsToDisplay1);
var randomizedArray2 = randomize(imgsToDisplay2);


return (


    <div >

          <img id="set_time_1" src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,w_400/v1490486806/SHIN_hlneuk.png" />
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

            {randomizedArray2.map((ele) =>
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
