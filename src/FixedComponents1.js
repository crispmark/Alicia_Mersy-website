import React, { Component } from 'react';


class FixedComponents1 extends Component {

      render() {

        var smallImg={
          width: "20%"
        }

      return (

          <div className="FixedComponents1">
            <p>
      				Always be yourself. Never try to hide who you are. The only shame is to have shame. Always stand up for what you believe in. Always question what other people tell you.Never regret the past, it’s a waste of time. <span>There’s a reason for everything. Every mistake, every moment of weakness, every terrible thing that has happened to you. </span>Grow from it. The only way you can ever get the respect of others is when you show them that you respect yourself and most importantly, do your thing and never apologize for being you. -wings of encouragement



      			</p>

            <div>
      			<img style={smallImg} src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1486235671/a6_stxbgk.png"} />
      			<img src={"https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1486235680/a7_p5wr54.jpg"} />
            </div>

          </div>
          );

        }
}



export default FixedComponents1;
