import React from 'react';
import { Grid, Paper } from '@mui/material';
import './ChooseUs.css'; // Import CSS file for styling
import { Padding } from '@mui/icons-material';

const ChooseUs = ({ChooseHead}) => {
  return (
    <div className='flex justify-center my-20 my-2'>
       
        <div  className='w-[69%]'>
        <h2 className='text-4xl  text-black my-4  py-4 text-center'>{ChooseHead}</h2>
        <Grid container  spacing={3}>
      {/* First row */}
      <Grid item xs={6}>
        <Paper className="grid-item" sx={{padding:"0"}}> 
          <img src="/Images/Choose/img1.jpg" alt="Image 1" className="grid-image1" />
          <div className="image-overlay">
            <p>Text information for Image 1</p>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className="grid-item " sx={{padding:"0"}}>
          <img src="/Images/Choose/img2.jpg" alt="Image 2" className="grid-image1" />
          <div className="image-overlay">
            <p>Text information for Image 2</p>
          </div>
        </Paper>
      </Grid>

      {/* Second row */}
      <Grid item xs={4}>
        <Paper className="grid-item" sx={{padding:"0"}}>
          <img src="/Images/Choose/img3.jpg" alt="Image 3" className="grid-image" />
          <div className="image-overlay">
            <p>Text information for Image 3</p>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="grid-item" sx={{padding:"0"}}>
          <img src="/Images/Choose/img4.jpg" alt="Image 4" className="grid-image" />
          <div className="image-overlay">
            <p>Text information for Image 4</p>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="grid-item" sx={{padding:"0"}}>
          <img src="/Images/Choose/img5.jpg" alt="Image 5" className="grid-image" />
          <div className="image-overlay">
            <p>Text information for Image 5</p>
          </div>
        </Paper>
      </Grid>
    </Grid>
    </div>
        </div>
        
    
  );
};

export default ChooseUs;
