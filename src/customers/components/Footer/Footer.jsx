import React from 'react';
import { Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="w-full px-4">
        <Grid container spacing={4}>
          
          {/* First Column: Useful Links */}
          <Grid item xs={12} md={4}>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Home Page</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Login/Registration</a></li>
            </ul>
          </Grid>
          
          {/* Second Column: Policies */}
          <Grid item xs={12} md={4}>
            <h2 className="text-xl font-semibold mb-4">Policies</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Return Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Exchange Policy</a></li>
            </ul>
          </Grid>
          
          {/* Third Column: Logo */}
          <Grid item xs={12} md={4} className="flex justify-center items-center">
            <img src="/Images/saptosi_logo.png" alt="Logo" className="h-16" />
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
