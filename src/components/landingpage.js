import React, { Component , useState } from 'react';
import { Grid, Cell } from 'react-mdl';


const Landing = props => {
  const [ darkMode , setDarkMode] =   useState(false)
  const SwitchHandler = () => {
    alert("qvc");
  }
  
  const addStars =() =>
  {

    {
      if (darkMode== true)
      { return (<div id='stars'> <div id='stars2'> <div id='stars3'>  </div> </div> </div>
                );   

     }
  }
  }
  console.log("avc",darkMode , setDarkMode);
    return(

      <div style={{width: '100%', margin: 'auto'}}>
        
        <Grid className="landing-grid-dark-mode"   className= { darkMode ? "landing-grid-dark-mode" : "landing-grid-light-mode"}>
        
          <Cell col={12}>
            
         
            <img
              src="https://www.dropbox.com/s/eij79cyde9ga51q/Kunj_avatar.png?raw=1"
              
              alt="avatar"
              className= "avatar-img"
              
              />
              {addStars()}
              
              
              <div>
                 <label class="switch">
                  <input type="checkbox"/>
                    <span class="slider round"  onClick= { () => setDarkMode (prevMode => ! prevMode)}></span>
                    </label>
                   
                   </div>
            <div className="banner-text">
              <h1> Kunj Shah</h1>
              <h3> Full Stack  Developer</h3>

            <hr/>

          <p>Java | Python | JavaScript | React | DevOps | NodeJS | AWS | MongoDB  </p>
        
        <div className="social-links ">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kunj-shah-39210a12b" rel="noopener noreferrer" target="_blank" >
            <i className="fa fa-linkedin-square " aria-hidden="true"  />
          </a>

          {/* Github */}
          <a href="https://github.com/Kunj-97" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a> */}

          {/* Youtube */}
          {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a> */}

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  
}

export default Landing;
