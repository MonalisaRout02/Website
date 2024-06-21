import React from 'react'

const SingleProduct = ({ product }) => {
  return (
    <div className='max-w-7xl mx-auto  p-6'>
      <div className='flex flex-col justify-between lg:flex-row p-4 border border-stone-200 gap-14'>
      <div className='flex-shrink-0 '>
          <img className='object-cover' src={product.image} alt="Product" style={{height:"470px"}} />
        </div>
        <div className='flex flex-col gap-8 bg-stone-100 p-5'>
          <div>
          <span className='text-stone-600 font-semibold'>{product.p_category}</span>
          <h1 className='text-3xl font-bold pt-2'>{product.p_name}</h1>
          </div>
          <p className='text-gray-600'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, iusto? Cum numquam ipsam maiores! Aperiam voluptates obcaecati maiores vero cupiditate ipsum, culpa, reiciendis fuga quis illum laboriosam excepturi molestiae pariatur.
          </p>
          <h6 className='text-2xl font-semibold'>{product.p_weight}</h6>
          <p>gms</p>
          <div className='flex flex-row items-center gap-14'>
            <div className='flex flex-row items-center'>
              <button className='bg-gray-200 py-2 px-3 rounded-lg'>-</button>
              <span className='py-4 px-6 rounded-l'>1</span>
              <button className='bg-gray-200 py-2 px-3 rounded-lg'>+</button>
            </div>
            <button className='bg-stone-600 text-white font-semibold py-2 px-6 rounded-sm' >Add to cart</button>
          
          </div>
        
      </div>
     </div>
    </div>
    
  )
}

export default SingleProduct
