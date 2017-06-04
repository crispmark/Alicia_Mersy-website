import React, { Component } from 'react';
import FixedImgs from "./FixedImgs.js";
import { StickyContainer, Sticky } from 'react-sticky';


class FirstBackground extends Component {



  constructor(props) {
  super(props);
}


render() {
return (
  <div>
    {
      [1,2,3,4,5,6,7,8].map(i => {
        return (
          <StickyContainer key={i} style={{ height: 1000}}>
            <Sticky>
              {
                ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
                  return (
                    <div>
                      <img className="sticky_img" src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_scale,w_1900/v1487026129/background_11_x5ob78.jpg" />
                    </div>
                  )
                }
              }
            </Sticky>
          </StickyContainer>
        )
      })
    }
  </div>
);
}
}


export default FirstBackground;
