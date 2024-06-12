import { Button } from '@mui/material';
import React from 'react';
import './HomeAbout.css';
const HomeAbout = ({setCurrentView}) => {
  return (
    <div className='flex justify-center my-20'>
        
      <div className='flex w-[76%]'>
        <div className='w-1/2'>
          <img src="/Images/HomeAbout.png" alt="About Us" className="image-with-animation"/>
        </div>
        <div className='w-1/2 pl-10'>
          <h2 className="text-3xl text-black mb-4 text-justify">About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos minus necessitatibus quasi nam nihil modi, delectus itaque fuga voluptatibus eius quod laboriosam hic dignissimos, asperiores consectetur officia unde iusto porro. Ipsam iste minima, odit facilis odio soluta tempore assumenda ea nesciunt rem eum in doloremque perferendis quia minus et, autem consectetur consequatur? Amet a porro quo pariatur, eum quos quibusdam.</p>
          <Button 
            variant='contained' 
            sx={{ 
              backgroundColor: "#58504C", 
              margin: "4px", 
              mt: 5, 
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
