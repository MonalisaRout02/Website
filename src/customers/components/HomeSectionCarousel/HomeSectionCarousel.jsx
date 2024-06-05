import React, { useState } from 'react'

import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import Button  from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



const HomeSectionCarousel = ({sectionName}) => {
   const [activeIndex,setActiveIndex] = useState(0); 
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5},
    };

    const slideNext = ()=> setActiveIndex(activeIndex+1);
    const slidePrev = ()=> setActiveIndex(activeIndex-1);
 

    const syncActiveIndex=({item})=>setActiveIndex(item);
    

    const items=[1,1,1,1,1,1,1,1].map((item)=> 
        <HomeSectionCard />
    )
  return (
    
    <div className='px-4 lg:px-8'>
      <h2 className='text-3xl  text-black my-2  py-4 text-center'>{sectionName}</h2>
        <div className='relative p-5'>

        <AliceCarousel
          mouseTracking
          items={items} 
          responsive={responsive} 
          autoPlay
          autoPlayInterval={2000}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          />
        <Button variant="text" className=' ml-2' onClick={slideNext}  sx={{position:"absolute",top:'10rem',right:"0rem",transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}} aria-label='next'>
            <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}} />
        </Button>

        <Button variant="text" className=' ml-2' onClick={slidePrev}sx={{position:"absolute",top:'10rem',left:"0rem",transform:"translateX(-50%) rotate(-90deg)", bgcolor:"white"}} aria-label='next'>
            <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}} />
        </Button>
        </div>
       
       
    </div>
  )
}

export default HomeSectionCarousel
