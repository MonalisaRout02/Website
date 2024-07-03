import React from 'react';
import './ProductsCard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const handleProductClick = (product, setCurrentView, setProduct) => {
  setProduct(product);
  setCurrentView('SingleProduct'); 
};

const handleFavoriteClick = async (product, parsedUserData, setIsFavorite, setShowModal) => {
  
  if (!parsedUserData) {
    setShowModal(true)
    return;
  } 

  try {
    const response = await axios.post('http://localhost:5000/wishlist/add-item', {
      u_id: parsedUserData.u_id,
      p_id: product.p_id,
    });

    if (response.status === 200) {
      setIsFavorite(true);
    } else {
      alert('Failed to add to wishlist.');
    }
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    alert('Error adding to wishlist.');
  }
  try {
    const response = await axios.get(`http://localhost:5000/wishlist/get-wishlist/${parsedUserData.u_id}`);
    const exists = response.data.some(item => item.p_id === product.p_id);
    setIsFavorite(exists);
  } catch (error) {
    console.error('Error fetching wishlist:', error);
  }
};

const ProductCard = ({ product , setCurrentView, setProduct, userData, setShowModal, isFavorite, setIsFavorite }) => {
  const parsedUserData = typeof userData === 'string' ? JSON.parse(userData) : userData;
  const u_id = parsedUserData ? parsedUserData.u_id : '';

  const fetchWishlist = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:5000/wishlist/get-wishlist/${u_id}`);
      const exists = response.data.some(item => item.p_id === productId);
      setIsFavorite(exists);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  return (
    <div 
    className='relative productCard w-[14rem] m-3 transition-all cursor-pointer border border-stone-200 shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 group'
    onClick = {() => { handleProductClick(product, setCurrentView, setProduct) }} 
    onMouseEnter={() => { fetchWishlist(product.p_id); }} 
    >

      <div 
      className='absolute top-1 right-2 z-8 opacity-0 group-hover:opacity-100 transition-opacity duration-100'
      onClick={(e) => {
        e.stopPropagation(); // Prevent triggering the product click
        handleFavoriteClick(product, parsedUserData, setIsFavorite, setShowModal);
      }}
      >
        {isFavorite ? (
          <FavoriteIcon className='text-red-600' />
        ) : (
          <FavoriteBorderIcon 
            className='text-gray-600' />
        )}
      </div>
      <div className='h-[15rem]'>
        <img className="h-full w-full object-cover" src={product.image} alt={product.p_name} />
      </div>
      <div className='textPart bg-white p-3 border-t-2 border-stone-200'>
        <div>
          <p className='font-semibold text-gray-600'>{product.p_name}</p>
        </div>
        <div className='flex items-center space-x-2 mt-2'>
          <p className='font-semibold text-gray-400 text-sm'>{product.p_category}</p>
          <p className='font-semibold text-gray-400 text-sm'>{product.p_weight} gms</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
