import { Button } from '@mui/material';
import React from 'react';
import './HomeAbout.css';
const HomeAbout = ({setCurrentView}) => {
  return (
    <div className="flex justify-center mb-20 mx-4 my-20">
    <div className="flex flex-col lg:flex-row w-full lg:w-[76%]">
      <div className="w-full lg:w-1/2">
        <img
          src="/Images/HomeAbout.png"
          alt="About Us"
          className="w-full h-auto image-with-animation"
        />
      </div>
      <div className="w-full lg:w-1/2 lg:pl-10 mt-4 lg:mt-0">
        <h2 className="text-3xl text-black mb-4 text-justify">Our Story</h2>
        <p className="text-base lg:text-lg">
        Saptosi Jewellers specializes in bespoke, lightweight jewellery meticulously crafted at our state-of-the-art integrated manufacturing facility in Bengaluru’s Cubbonpete. Our exquisite signature collections seamlessly combine traditional elegance with modern design, catering specifically to discerning Indian households. We pride ourselves on offering custom designs with a remarkably quick 15-day turnaround.
        </p>
        <Button 
            variant='contained' 
            sx={{ 
              backgroundColor: "#58504C", 
              margin: "4px", 
              mt: 2, 
              '&:hover': { 
                backgroundColor: "#292524" 
              } 
            }}
            onClick = {()=>setCurrentView('aboutus')}
          >
            About Us
          </Button>
      </div>
    </div>
  </div>
          

        
  )
}

export default HomeAbout;
