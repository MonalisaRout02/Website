import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCard from '../../components/HomeSectionCard/HomeSectionCard'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import CategoryGrid from '../../components/CategoryCard/CategoryGrid'
import Banner1 from '../../components/Banners/Banner1'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div  className='px-4 lg:px-8'>
        <HomeSectionCarousel  sectionName={"Featured Products"}/>
        <Banner1 />
        <CategoryGrid sectionName1={"Categories"} />
      </div>
    </div>
  )
}

export default HomePage;

