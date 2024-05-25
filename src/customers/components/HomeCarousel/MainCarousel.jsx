import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCarouselData';




const MainCarousel = () => {

    const items = MainCarouselData.map( (item)=> 
    <img className='cursor-pointer' role='presentation' style={{width: "100%"}} src={item.image} alt='caraousel-img' />
    )
    return(
        <AliceCarousel
        mouseTracking
       
        items={items}  
        disableButtonsControls
        
        autoPlay
        autoPlayInterval={1000}
        infinte
    />)
}

export default MainCarousel;