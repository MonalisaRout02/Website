import React from 'react';
import { Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
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
  );
}

export default Footer;
