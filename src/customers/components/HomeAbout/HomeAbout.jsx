import { Button } from '@mui/material';
import React from 'react';
import './HomeAbout.css';
const HomeAbout = ({setCurrentView}) => {
  return (
    <div className="flex justify-center mb-20 mx-4 sm:mt-2">
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
            We take pride in offering custom designs with an impressively quick 15-day turnaround. This commitment to speed and excellence ensures that our customers receive their unique, personalized jewellery pieces without delay. Our ability to meet tight deadlines without compromising on quality sets us apart in the industry.

              Saptosi Jewellers carries a legacy of over two decades, starting as dedicated manufacturers in 1997. Our journey began with a focus on precision and craftsmanship, establishing a strong foundation that has enabled us to thrive. 
            </p>
          </div>
        </div>
      </div>
  )
}

export default HomeAbout;
