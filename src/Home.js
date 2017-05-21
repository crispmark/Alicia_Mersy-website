import React, { Component } from 'react';
import "./App.css";
import HorizontalMarquee from "./HorizontalMarquee.js"
import Watch from "./ScrollMonitor.js"
import TypeWriter from 'react-typewriter';
import FixedComponentsA from "./FixedComponentsA.js"
import FixedComponents3 from "./FixedComponents3.js"
import FixedImgs from "./FixedImgs.js"

class Home extends Component {


  constructor(props) {
   super(props);


   this.state = {
     visibleChars: 0
   };

}

reset() {
    this.setState({
      visibleChars: 0
    });


 }




render() {



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
  { key: 13, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682211/Alicia_Mersy/IMG_4888.jpg"}

];

let imgsToDisplay3 = [
  { key: 15, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1487026129/background_11_x5ob78.jpg"},
  { key: 16, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681972/Alicia_Mersy/DSC06380.jpg"},
  { key: 17, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681724/Alicia_Mersy/DSC06292.jpg"},
  { key: 18, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681919/Alicia_Mersy/DSC09039.jpg"},
  { key: 19, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681550/Alicia_Mersy/CNV000013.jpg"}

]

let imgsToDisplay4 = [
  { key: 20, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681753/Alicia_Mersy/IMG_2062.jpg"},
  { key: 22, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681853/Alicia_Mersy/DSC09024.jpg"},
  { key: 23, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491682351/Alicia_Mersy/IMG_9939.jpg"},
  { key: 24, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681617/Alicia_Mersy/DSC02510.jpg"},
  { key: 25, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681765/Alicia_Mersy/DSC02701.jpg"},
  { key: 26, source: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681856/Alicia_Mersy/DSC08759.jpg"}

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



          <div className="secondBackground">

            <p>_“If you are irritated by every rub, how will your mirror be polished?” Sufi Master</p>
            <img className="secondBackground_first_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1490142959/tumblr_nkf9ebZzTV1tvhjyno1_1280_l1y4r4.jpg"} />

            <div className="flex_container padding_flex">
                  <img className="secondBackground_second_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/c_scale,w_1000/v1491682090/Alicia_Mersy/IMG_4451.jpg"} />
                  <img className="secondBackground_third_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491682444/Alicia_Mersy/tumblr_inline_nvi8vp8T2O1rnaui6_500.jpg"} />
            </div>

            <div className="video_container">
              <video autoPlay="autoPlay" muted loop>
                <source src="https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1490139070/a1_u3b6oq.mp4" type="video/mp4" />
              </video>
          </div>

          </div>

            {randomizedArray3.map((ele) =>
              <div key={ele.key}>
              <HorizontalMarquee></HorizontalMarquee>
              <div className="photo-content">
              <img src={ele.source} />
              </div>
              </div>
            )}

            <div className="thirdBackground">

            <div className="flex_container">
                    <img className="thirdBackground_second_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491682136/Alicia_Mersy/IMG_4623.jpg"} />
                    <img className="thirdBackground_third_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491682298/Alicia_Mersy/IMG_6648.jpg"} />
              </div>

              <img className="thirdBackground_forth_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1491681927/Alicia_Mersy/globe.png"} />
              <img className="thirdBackground_fifth_img" src={"http://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1493767274/cross_a6baxc.png"} />
              <img className="thirdBackground_sixth_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_1900/v1493767258/crossy_hayegf.png"} />
              <img className="thirdBackground_seventh_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1493767288/diamond_hvxfb7.png"} />

              <div className="thirdBackground_fixed1">
                <p><TypeWriter maxDelay={100} typing={1}>_Leave space in your day to pray for the poor, to meditate on empathy. get rid of yourself
                  “Breathe 7 times/ when Inhaling take in all the positive energy (PURE) When exhaling take all negative out (TOXIC)”</TypeWriter></p>

              </div>
              <div className="thirdBackground_fixed2">
                <TypeWriter typing={1}>ذِکْر</TypeWriter>
              </div>

              <div className="video_container first_video">
                <video autoPlay="autoPlay" muted loop>
                  <source src="https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1490139070/a1_u3b6oq.mp4" type="video/mp4" />
                </video>
            </div>


              </div>



            {randomizedArray3.map((ele) =>
              <div key={ele.key}>
              <div className="photo-content">
              <img src={ele.source} />
              </div>
                <HorizontalMarquee></HorizontalMarquee>
              </div>
            )}

            <div className="fourthBackground">

              <div className="verticalMarquee1">

                  <marquee><p>Knowledge of self is in your DNA - A Queen</p></marquee>

              </div>

            <div className="flex_container">
                  <img className="thirdBackground_second_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682471/Alicia_Mersy/worldmapswallpapercollection05.jpg"} />
                  <img className="thirdBackground_third_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,w_1200/v1491682211/Alicia_Mersy/IMG_4888.jpg"} />

            </div>

              <img className="fourthBackground_second_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1491682350/Alicia_Mersy/medical-logo-png-28.png"} />
                <img className="fourthBackground_third_img" src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1493767292/magnetics_tn5nyo.png"} />

                  <div className="fourthBackground_fixed1">
                    <p><TypeWriter maxDelay={100} typing={1}>_There will be a contour make up tutorial video, a few internet cafe prints, a heat dish parabolic electric heater, Vaseline, Sufism rituals, cable ties, warped 3d baby blue metallic textures and Lord concentrated musk.</TypeWriter></p>
                  </div>


                  <div className="video_container second_video">
                    <video autoPlay="autoPlay" muted loop>
                      <source src="https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1490150912/AMAN_AMAN_WINE_SLOW_m1i7az.mp4" type="video/mp4" />
                    </video>
                </div>



            </div>



            {randomizedArray4.map((ele) =>
              <div key={ele.key}>
              <div className="photo-content">
              <img src={ele.source} />
              </div>
                <HorizontalMarquee></HorizontalMarquee>
              </div>
            )}



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
                              <video autoPlay="autoPlay" muted loop>
                                <source src="https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1494547259/QUR_AN_OVER_THE_PRICE_IS_RIGHT_READYMADE_FLATBUSH_sytgpz.mp4" type="video/mp4" />
                              </video>
                          </div>


            </div>

            <div className="Biobackground">

              <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1494534236/Alicia_Mersy/lava-144.jpg" />

            <p> Alicia Mersy is an artist and art Director originally form Montreal now working in New York. </p><p> In 2013 she graduated from an MA Fine Art at Central Saint Martins. </p><p>  She is the co-funder of Malaxa - an art office - who’s work explores decolonial aesthetics and political resistance through digital culture, art, documentary and fashion.
            </p>




            </div>






        </div>
    );

  }
}

export default Home;
