import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-sm shadow-lg overflow-hidden w-[15rem] mx-3 border-gray-100'>
      
      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full'src="/Images/Products/1.jpg" alt="prodduct" />
      </div>
      <div className='p-4'></div>
      <h3 className='text-lg font-medium  text-orange-300'>saptosi Jewellers</h3>
      <p className='mt-2 text-sm  text-orange-300'>Earrings</p>
    </div>
  )
}

export default HomeSectionCard
