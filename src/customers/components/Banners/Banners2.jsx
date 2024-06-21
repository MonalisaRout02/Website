import React from 'react';

const Banner2 = ({BannerHead}) => {
  
  return (
    
        
        <div className='m-8 flex flex-col items-center'>
          
          <img className='h-11 mt-6 mb-8' src='/Images/UnderLine.png' alt='underline' />
          <h2 className='text-3xl  text-black py-2 text-center my-5 mb-6'>{BannerHead}</h2>
          <img className='rounded-lg w-full max-w-screen-lg object-cover' src='/Images/Banners/Banner2.png' alt='banner1' />
       </div>
   
    
  );
}

export default Banner2;
