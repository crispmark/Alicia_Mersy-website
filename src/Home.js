import React, { Component } from 'react';
import "./App.css";
import HorizontalMarquee from "./HorizontalMarquee.js"
import Watch from "./ScrollMonitor.js"
import FixedComponentsA from "./FixedComponentsA.js"


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
  { key: 1, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026125/background_6_fmmov8.jpg"},
  { key: 2, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026129/background_7_befcpo.jpg"},
  { key: 3, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026140/background_8_lo0vze.jpg"},
  { key: 4, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026130/background_9_bezdbv.jpg"},
  { key: 5, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026133/background_10_cnai6t.jpg"},
  { key: 6, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026138/background_18_vcwlmd.png"},
  { key: 7, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026129/background_11_x5ob78.jpg"}
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

          <div className="first_background">
            <h1></h1>
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
