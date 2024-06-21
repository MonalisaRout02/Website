import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCard from '../../components/HomeSectionCard/HomeSectionCard'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import CategoryGrid from '../../components/CategoryCard/CategoryGrid'
import Banner1 from '../../components/Banners/Banner1'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import ChooseUs from '../../components/ChooseUs/ChooseUS'
import ContactUs from '../../components/ContactUs/ContactUs'
import Banner2 from '../../components/Banners/Banners2'
const HomePage = ({setCurrentView}) => {
  return (
    <div>
      <MainCarousel />
      <div  className='px-4 lg:px-8'>
        <HomeSectionCarousel  sectionName={"Featured Products"}/>
        <Banner1 BannerHead={"Explore New Collections"}/>
        <CategoryGrid sectionName1={"Categories"} />
        <HomeAbout setCurrentView={setCurrentView}/>
        <ChooseUs ChooseHead={"Why Choose Us"}/>
        <Banner2 BannerHead={"Customize Jewellery"}/>
        <ContactUs SecName={"Contact Us"} />
      </div>
    </div>
  )
}

export default HomePage;

