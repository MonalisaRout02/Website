import React from "react";
import { Button } from "@mui/material";

const AboutUs = () => {
  return (
    <div>
      <div className="relative w-full h-screen lg:h-screen hidden sm:block mb-20">
        <img
          className="w-full h-full object-cover"
          src="/Images/AboutUs/About.jpg"
          alt="About Us" 
        />
        <div className="absolute inset-0 flex items-start justify-start p-4 lg:p-8 ">
          <div className="bg-black bg-opacity-30 p-4 backdrop-blur-sm rounded w-full max-w-lg mx-4 lg:ml-16 mt-10 lg:mt-20 sm:mt-0">
            <h3 className="text-white font-bold text-2xl lg:text-3xl py-2 lg:py-3 px-2">
              About Us
            </h3>
            <p className="text-white text-base lg:text-lg py-2 lg:py-3 px-2">
            Saptosi Jewellers specializes in bespoke, lightweight jewellery crafted at our state-of-the-art integrated manufacturing facility located in the heart of Bengaluru’s historic Cubbonpete area. Our signature collections combine the timeless elegance of traditional designs with the sleek sophistication of modern aesthetics, making them the perfect choice for discerning Indian households. 
            </p>
          </div>
        </div>
      </div>

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

      <div className="flex flex-col justify-center items-center mt-15">
        <div className="w-3/4">
          <h2 className="text-3xl text-black mb-4 text-center">Our Story</h2>
          <p className="text-base lg:text-lg text-center">
          In 2017, we expanded our horizons by opening our jewellery store, officially branded as Saptosi Jewellers, to cater directly to the public. 
          Our in-house manufacturing setup is one of our greatest strengths, allowing us to design and customize jewellery according to the specific preferences and requirements of our customers. This personalized approach ensures that each piece is unique and resonates with the individual style of the wearer. One of the most attractive aspects of our offerings is that we do not impose making charges on our customers. This transparent pricing model underscores our commitment to providing exceptional value and affordability.

              Saptosi Jewellers plays a pivotal role in making high-quality jewellery accessible to a broad audience. Whether you are preparing for a wedding, seeking the perfect gift for a loved one, or looking to make a sound investment in gold, we have you covered. Our extensive range of designs spans every category and style, from intricate rings to stunning necklaces and beyond.

              We invite you to explore your personal style with our exquisite designs. Visit Saptosi Jewellers and discover a world of elegance, craftsmanship, and timeless beauty. 
          </p>
        </div>
      </div>

      <div className='m-8 flex flex-col items-center'>
          
          <img className='h-11 mt-6 mb-8' src='/Images/UnderLine.png' alt='underline' />
         
          <img className='rounded-lg w-full max-w-screen-lg object-cover' src='/Images/Banners/Banner1.png' alt='banner1' />
       </div>

      <div className="container py-8 w-3/4 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {/* <!-- Container 1 --> */}
            <div className="p-6 transition-transform transform hover:-translate-y-2 duration-300 text-center">
            <div className="mb-4">
                <img
                src="./Images/AboutUs/custome_design.png"
                alt="Image 1"
                className="transition-transform transform hover:-translate-y-2 duration-300 w-1/2 rounded-md mx-auto"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customised Jewels</h3>
            <p className="text-gray-600">At saptosi jewellers, customers can enjoy bespoke jewelry services allowing them to create unique & personalised pieces. </p>
            </div>

            {/* <!-- Container 2 --> */}
            <div className="p-6 transition-transform transform hover:-translate-y-2 duration-300 text-center">
            <div className="mb-4">
                <img
                src="./Images/AboutUs/low_price.png"
                alt="Image 2"
                className="transition-transform transform hover:-translate-y-2 duration-300 w-1/2 rounded-md mx-auto"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lower costs</h3>
            <p className="text-gray-600">Discover exquisite craftmanship at unbeatable prices with saptosi jewellers where we commit to affordability and stunning jewellery.</p>
            </div>

            {/* <!-- Container 3 --> */}
            <div className="p-6 transition-transform transform hover:-translate-y-2 duration-300 text-center">
            <div className="mb-4">
                <img
                src="./Images/AboutUs/happy_customers.png"
                alt="Image 3"
                className="transition-transform transform hover:-translate-y-2 duration-300 w-1/2 rounded-md mx-auto"
                />
            </div>
              <h3 className="text-xl font-semibold mb-2">Delightful Customers</h3>
              <p className="text-gray-600">At saptosi jewellers, we take pride in our content and delighted customers who appreciate our exquisite designs and exceptional service.</p>
            </div>

            {/* <!-- Container 4 --> */}
            <div className="p-6 transition-transform transform hover:-translate-y-2 duration-300 text-center">
            <div className="mb-4">
                <img
                src="./Images/AboutUs/customer_care_bw.png"
                alt="Image 4"
                className="transition-transform transform hover:-translate-y-2 duration-300 w-1/2 rounded-md mx-auto"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">Saptosi jewellers prides itself on exceptional customer support, offering personalised assistance and ensuring a seamless shopping experience for every client.</p>
            </div>
        </div>
        </div>

    </div>
  );
};

export default AboutUs;
