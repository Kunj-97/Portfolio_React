import React, { Component } from 'react';
// import Typical from 'react-typical';
import Sky from 'react-sky';
import myImage1 from "./media/aws.png"
import myImage2 from "./media/angular.png"
import myImage3 from "./media/python.png"
import myImage4 from "./media/intellij.png"
import myImage5 from "./media/ubuntu.png"

class About extends Component {
  render() {
    return(
      <div>
        
        <div class="title-about">


          <h1> About Me</h1>
          <h5>Highly motivated Master's Student in Computer Science with hands-on experience as a 
        Full Stack Developer. I have a sizeable experience in developing websites using the MVC 
        architecture through JavaScript Frameworks( AngularJS, NodeJS, ReactJS ) paired with PHP 
        frameworks ( Laravel) from scratch as well as augmenting UX of old systems while synchronizing their backend.</h5>
        </div>
        {/* <h1>About Page</h1>
      
      
      <h5>Highly motivated Master's Student in Computer Science with hands-on experience as a 
        Full Stack Developer. I have a sizeable experience in developing websites using the MVC 
        architecture through JavaScript Frameworks( AngularJS, NodeJS, ReactJS ) paired with PHP 
        frameworks ( Laravel) from scratch as well as augmenting UX of old systems while synchronizing their backend.</h5>
      
        <Typical
        steps={['Hello', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      /> */}
    <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: myImage5,  /* You can pass as many images as you want */
            1: myImage1,
            2: myImage2, /* you can pass images in any form: link, imported via webpack... */
            3: myImage3,
            4: myImage4
            
            /* 4: your other image... */
            /* 5: your other image... */
            /* ... */
          }}
          how={70} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={'60px'} /* size of the rendered images */
          background={'palettedvioletred'} /* color of background */
        />
      
      </div>

      
    )
  }
}

export default About;

