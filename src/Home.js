import React, { Component } from 'react';
import "./App.css";
import HorizontalMarquee from "./HorizontalMarquee.js"

class Home extends Component {


render() {

let imgsToDisplay = [
  { key: 1, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026121/background_1_vqjmfz.jpg"},
  { key: 2, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026123/background_2_xtzrb4.jpg"},
  { key: 3, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026123/background_3_kxkmgn.jpg"},
  { key: 4, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026129/background_4_shheba.jpg"},
  { key: 5, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026126/background_5_r34mvo.jpg"},
  { key: 6, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026125/background_6_fmmov8.jpg"},
  { key: 7, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026129/background_7_befcpo.jpg"},
  { key: 8, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026140/background_8_lo0vze.jpg"},
  { key: 9, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026130/background_9_bezdbv.jpg"},
  { key: 10, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026133/background_10_cnai6t.jpg"},
  { key: 11, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026138/background_14_ds1s1k.png"},
  { key: 12, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026138/background_18_vcwlmd.png"},
  { key: 13, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1487026129/background_11_x5ob78.jpg"},

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


    <div >

          {randomizedArray.map((ele) =>
            <div key={ele.key}>
            <div className="photo-content">
            <img src={ele.source} />
            </div>
            <HorizontalMarquee />
            </div>
          )}
        </div>
    );

  }
}

export default Home;
