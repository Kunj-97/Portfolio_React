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
      
     
      <iframe src="https://www.dropbox.com/s/fio4riudrowtn7i/Resume_Kunj_SWE.pdf?raw=1" width="100%" height="1300" frameborder="0" 
      style= {{ background: '#000000' , color:'000000' }}    
      >
This browser does not support PDFs. Please download the PDF to view it: Download PDF
</iframe>

https://www.dropbox.com/s/fio4riudrowtn7i/Resume_Kunj_SWE.pdf?raw=1

      </div>
    )
  }
}

export default Resume;
