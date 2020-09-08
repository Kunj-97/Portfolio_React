import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import IframeResizer from 'iframe-resizer-react'



class Resume extends Component {

  
  render() {

    
     
      
    return(
      <div>
      
     
      <iframe src="https://www.dropbox.com/s/0z5zok5t4envv4r/Resume.pdf?raw=1" width="100%" height="1300">
This browser does not support PDFs. Please download the PDF to view it: Download PDF
</iframe>


      </div>
    )
  }
}

export default Resume;
