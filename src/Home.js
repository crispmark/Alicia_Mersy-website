import React, { Component } from 'react';
import "./App.css";
import HorizontalMarquee from "./HorizontalMarquee.js"
import FixedImgs from "./FixedImgs.js"
import SecondBackground from "./SecondBackground.js"
import ThirdBackground from "./ThirdBackground.js"
import FourthBackground from "./FourthBackground.js"
import FifthBackground from "./FifthBackground.js"
import BioBackground from "./BioBackground.js"
import axios from 'axios';
require('es6-promise').polyfill();
require('isomorphic-fetch');


class Home extends Component {


  constructor(props) {
   super(props);


   this.state = {
     visibleChars: 0,
     issPosition: []

    };

}

reset() {
    this.setState({
      visibleChars: 0
    });
 }

 getInitialProps(){

 }

 componentDidMount(){

   fetch("http://api.open-notify.org/iss-now.json")
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
  .then(result => {
			this.setState({
				issPosition: result.iss_position
			});

		})
		.catch(err => {
			console.log(err.stack);
		})
 }

render() {


  console.log("here" , this.state.issPosition);

          let imgsToDisplay1 = [
            { key: 1, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1487026121/background_1_vqjmfz.jpg"},
            { key: 2, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491682476/Alicia_Mersy/waterfall-hd-1366x768.jpg"},
            { key: 3, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1487026123/background_3_kxkmgn.jpg"},
            { key: 4, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1487026129/background_4_shheba.jpg"},
            { key: 5, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1487026126/background_5_r34mvo.jpg"},
            { key: 6, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681778/Alicia_Mersy/DSC08742.jpg"},
            { key: 7, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681958/Alicia_Mersy/IMG_3093.jpg"},


          ];

          let imgsToDisplay2 = [
            { key: 8, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1487026125/background_6_fmmov8.jpg"},
            { key: 9, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1487026129/background_7_befcpo.jpg"},
            { key: 10, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1487026140/background_8_lo0vze.jpg"},
            { key: 11, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1487026130/background_9_bezdbv.jpg"},
            { key: 12, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1487026133/background_10_cnai6t.jpg"},
            { key: 13, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682211/Alicia_Mersy/IMG_4888.jpg"},

          ];

          let imgsToDisplay3 = [
            { key: 15, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1487026129/background_11_x5ob78.jpg"},
            { key: 16, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681972/Alicia_Mersy/DSC06380.jpg"},
            { key: 17, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681724/Alicia_Mersy/DSC06292.jpg"},
            { key: 18, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681919/Alicia_Mersy/DSC09039.jpg"},
            { key: 19, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681550/Alicia_Mersy/CNV000013.jpg"},

          ]

          let imgsToDisplay4 = [
            { key: 20, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681753/Alicia_Mersy/IMG_2062.jpg"},
            { key: 22, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681853/Alicia_Mersy/DSC09024.jpg"},
            { key: 23, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491682351/Alicia_Mersy/IMG_9939.jpg"},
            { key: 24, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681617/Alicia_Mersy/DSC02510.jpg"},
            { key: 25, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681765/Alicia_Mersy/DSC02701.jpg"},
            { key: 26, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681856/Alicia_Mersy/DSC08759.jpg"},

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
          var randomizedArray3 = randomize(imgsToDisplay3);
          var randomizedArray4 = randomize(imgsToDisplay4);
          var randomizedArray2 = randomize(imgsToDisplay2);



return (


    <div>

      <h1 className="data_test">{this.state.issPosition.latitude}</h1>

      <img  id="sticky_1" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1490156377/cosmic_spheres_c_tdarne.jpg"} />


          <FixedImgs />

            <div className="verticalMarquee1">

                <marquee><p>Knowledge of self is in your DNA - A Queen</p></marquee>

            </div>

          <div className="firstBackground">

            <img src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1490156377/cosmic_spheres_c_tdarne.jpg"} />

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



            <SecondBackground></SecondBackground>

            {randomizedArray2.map((ele) =>
              <div key={ele.key}>
              <HorizontalMarquee></HorizontalMarquee>
              <div className="photo-content">
              <img src={ele.source} />
              </div>
              </div>
            )}

            <ThirdBackground></ThirdBackground>



            {randomizedArray3.map((ele) =>
              <div key={ele.key}>
              <div className="photo-content">
              <img src={ele.source} />
              </div>
                <HorizontalMarquee></HorizontalMarquee>
              </div>
            )}


            <FourthBackground></FourthBackground>


            {randomizedArray4.map((ele) =>
              <div key={ele.key}>
              <div className="photo-content">
              <img src={ele.source} />
              </div>
                <HorizontalMarquee></HorizontalMarquee>
              </div>
            )}

            <div>

              <FifthBackground></FifthBackground>


            </div>



          <BioBackground></BioBackground>


        </div>
    );

  }
}

export default Home;
