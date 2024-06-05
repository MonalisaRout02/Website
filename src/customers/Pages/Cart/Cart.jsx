import React from 'react'

export default function Cart() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center overflow-x-hidden">
    <img src="empty_cart.png" alt="" className='h-1/4'/>
    <p className="text-3xl font-medium  mb-4 text-stone-900 max-w-lg">Your cart is empty</p>
    <a href="/" className="text-white bg-stone-700 hover:bg-stone-800 focus:ring-2 focus:ring-opacity-50 focus:ring-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 shadow-md max-w-lg">
      Continue Shopping
    </a>
  </div>
  )
}
