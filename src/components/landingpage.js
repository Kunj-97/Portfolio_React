import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.dropbox.com/s/eij79cyde9ga51q/Kunj_avatar.png?raw=1"
              
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Full Stack  Developer</h1>

            <hr/>

          <p>Java | Python | JavaScript | React | DevOps | NodeJS | AWS | MongoDB  </p>

        <div className="social-links ">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kunj-shah-39210a12b" rel="noopener noreferrer" target="_blank" >
            <i className="fa fa-linkedin-square " aria-hidden="true"  />
          </a>

          {/* Github */}
          {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a> */}

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
}

export default Landing;
