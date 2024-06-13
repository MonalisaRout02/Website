import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full text-center">
      <div className="w-full px-20">
        <Grid container className="px-20">
          
          
          <Grid item xs={6} md={3}>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Home Page</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Login/Registration</a></li>
            </ul>
          </Grid>


          <Grid item xs={6} md={3}>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Home Page</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Login/Registration</a></li>
            </ul>
          </Grid>

          
       
          <Grid item xs={6} md={3}>
            <h2 className="text-xl font-semibold mb-4  " >Policies</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Return Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Exchange Policy</a></li>
            </ul>
          </Grid>
          
         
          <Grid item xs={6} md={3} className="flex justify-center items-center">
            <img src="saptosi_logo.png" alt="Logo" className="h-16" />
          </Grid>
        </Grid>
      </div>
    </footer>
    
    //    <div>
    //     <Grid className='bg-black text-white text-center mt-10'
    //     container
    //     sx={{ background:"black",color:"white",py:3}}>

    //       <Grid item xs={12} sm={6} md={3}>
    //         <Typography className='pb-5' variant='h6'>Quick Links</Typography>
    //         <Button className='pb-5' variant='h6' gutterBottom>About Us</Button>
    //         <Button className='pb-5' variant='h6' gutterBottom>Shop Page</Button>
    //         <Button className='pb-5' variant='h6' gutterBottom>Account</Button>
    //         <Button className='pb-5' variant='h6' gutterBottom>Wishlist</Button>
    //         <Button className='pb-5' variant='h6' gutterBottom>Cart</Button>
    //       </Grid>

    //     </Grid>
    // </div>
   
   
  );
}

export default Footer;
