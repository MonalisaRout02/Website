import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const handleFavoriteClick = async (product, parsedUserData, isFavorite, setIsFavorite, setShowModal) => {
  console.log(parsedUserData)
  if (!parsedUserData) {
    setShowModal(true);
    return;
  }

  try {
    const response = await axios.get(`http://localhost:5000/wishlist/get-wishlist/${parsedUserData.u_id}`);
    const exists = response.data.some(item => item.p_id === product.p_id);
    setIsFavorite(exists);
    if (exists) {
      // If product is in the wishlist, remove it
      try {
        const deleteResponse = await axios.delete(`http://localhost:5000/wishlist/delete-item/${parsedUserData.u_id}/${product.p_id}`);
        if (deleteResponse.status === 200) {
          setIsFavorite(false);
        } else {
          alert('Failed to remove from wishlist.');
        }
      } catch (error) {
        console.error('Error removing from wishlist:', error);
      }
    } else {
      // If product is not in the wishlist, add it
      try {
        const addResponse = await axios.post('http://localhost:5000/wishlist/add-item', {
          u_id: parsedUserData.u_id,
          p_id: product.p_id,
        });
        if (addResponse.status === 200) {
          setIsFavorite(true);
        } else {
          alert('Failed to add to wishlist.');
        }
      } catch (error) {
        console.error('Error adding to wishlist:', error);
        alert('Error adding to wishlist.');
      }
    }
  } catch (error) {
    console.error('Error fetching wishlist:', error);
  } finally {
    console.log('handleFavoriteClick function executed');
  }
};


const handleAddToCart = async (product, parsedUserData, quantity, setShowModal) => {
  
  if (!parsedUserData) {
    setShowModal(true)
    return;
  }
  
  try {
    const response = await axios.post('http://localhost:5000/cart/add-item', {
      u_id: parsedUserData.u_id,
      p_id: product.p_id,
      quantity: quantity
    });

    if (response.status === 200) {
      alert(response.data.message)
    } else {
      alert('Failed to add to cart.');
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    alert('Error adding to cart.');
  } 
}


const SingleProduct = ({ product, isFavorite, setIsFavorite, userData, setShowModal }) => {
  const [quantity, setQuantity] = useState(1);
  const parsedUserData = typeof userData === 'string' ? JSON.parse(userData) : userData;

 const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  return (
    <div className='relative max-w-7xl mx-auto  p-6'>
      <div className='flex flex-col justify-between lg:flex-row p-4 border border-stone-200 gap-14'>
      <div 
      className='absolute top-12 right-14 z-8'
      onClick={(e) => {
        e.stopPropagation(); // Prevent triggering the product click
        handleFavoriteClick(product, parsedUserData, setIsFavorite, setShowModal, isFavorite);
      }}
      >
      {isFavorite ? (
        <FavoriteIcon className='text-red-600' />
      ) : (
        <FavoriteBorderIcon 
          className='text-gray-600' />
      )}
      </div>
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
          <h6 className='text-2xl font-semibold'>{product.p_weight}</h6><p>gms</p>
          <div className='flex flex-row items-center gap-14'>
            <div className='flex flex-row items-center'>
              <button className='bg-gray-200 py-2 px-3 rounded-lg' onClick={decreaseQuantity}>-</button>
              <span className='py-4 px-6 rounded-l'>{quantity}</span>
              <button className='bg-gray-200 py-2 px-3 rounded-lg' onClick={increaseQuantity}>+</button>
            </div>
            <button 
            className='bg-stone-600 text-white font-semibold py-2 px-6 rounded-sm' 
            onClick={()=>{handleAddToCart(product, parsedUserData, quantity, setShowModal)}}
            >Add to cart</button>
          </div>

      </div>
     </div>
    </div>
    
  )
}

export default SingleProduct
