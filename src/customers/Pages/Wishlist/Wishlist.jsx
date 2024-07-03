import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function Wishlist( {userData}) {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const parsedUserData = typeof userData === 'string' ? JSON.parse(userData) : userData;
  const u_id = parsedUserData["u_id"];

  useEffect(() => {
    const fetchWishlist = async () => {
    
      try {
        const response = await axios.get(`http://localhost:5000/wishlist/get-wishlist/${u_id}`);
        setWishlistItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
        setLoading(false);
      }
    };
    fetchWishlist();
  }, [userData, u_id]);

  const handleDeleteItem = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/wishlist/delete-item/${u_id}/${itemId}`);
      if (response.status === 200) {
        // Update wishlistItems after successful delete
        const updatedWishlist = wishlistItems.filter(item => item.p_id !== itemId);
        setWishlistItems(updatedWishlist);
      } else {
        console.error('Failed to delete item:', response.data);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center overflow-x-hidden mt-10">
        <p className="text-3xl font-medium mb-4 text-stone-900">Loading...</p>
      </div>
    );
  }

  return (
    <>
      {wishlistItems.length === 0 ? (
        <div className="h-screen w-full flex flex-col items-center justify-center  overflow-x-hidden mt-10">
          <img src="empty_wishlist.jpg" alt="" className="h-1/4" />
          <p className="text-3xl font-medium mb-4 text-stone-900 max-w-lg">
            Your wishlist is empty
          </p>
          <a
            href="/"
            className="text-white bg-stone-700 hover:bg-stone-800 focus:ring-2 focus:ring-opacity-50 focus:ring-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 shadow-md max-w-lg"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="h-screen w-full flex flex-col items-center overflow-x-hidden mt-10">
          <h1 className="text-2xl font-bold mb-4">Your Wishlist Items</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
            {wishlistItems.map((item) => (
              <div
                key={item.p_id}
                className="bg-stone-200 rounded-md p-2 shadow-md flex items-center relative"
              >
                <HighlightOffIcon
                  className="absolute top-2 right-2 text-stone-700 cursor-pointer"
                  onClick={() => handleDeleteItem(item.p_id)}
                />
                <img
                  src={item.image}
                  alt={item.p_name}
                  className="w-24 h-32 md:w-24 md:h-32 object-cover rounded-md ml-0"
                />
                <div className='pl-3 pr-5'>
                  <h2 className="text-xl font-medium">{item.p_name}</h2>
                  <p className="text-sm text-stone-700">Category: {item.p_category}</p>
                  <p className="text-sm text-stone-700">Weight: {item.p_weight} gms</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
