import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Modal from '../Modal/Modal';

function Navigation({ setCurrentView }) {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleIconClick = (view) => {
    if (!isSignedIn) {
      setShowModal(true);
    } else {
      setCurrentView(view); // Set the current view based on the icon clicked
    }
  };

  const handleRequestOtp = (phoneNumber) => {
    console.log(`Request OTP for phone number: ${phoneNumber}`);
    // Add your logic to request an OTP here
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className='sticky top-0 z-10'>
      <nav className="bg-white sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between py-1 bg-stone-200">
          
          {/* Left Section: Logo and Title */}
          <div className="flex items-center space-x-2" onClick={() => setCurrentView('home')}>
            <img src="saptosi_logo.png" alt="Logo" className="h-11 w-11 ml-4" />
            <div className="flex flex-col space-y-0">
              <span className="text-xl font-cinzel-decorative font-semibold text-gray-800">Saptosi</span>
              <span className="font-cinzel-decorative text-xs ml-3">Chain of Jewellers</span>
            </div>
          </div>

          {/* Center Section: Search Bar */}
          <div className="flex-grow flex justify-center mx-4">
          <div className="relative w-4/5">
            <input
              type="text"
              placeholder="Search for Gold, Silver, Necklace..."
              className="border-1 rounded-sm py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-orange-100"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

          {/* Right Section: Conditional Links and Icons */}
          <div className="flex items-center space-x-7 mr-4">
            {!isSignedIn ? (
              <>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleIconClick}>
                  <FavoriteBorderIcon />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleIconClick}>
                  <ShoppingCartIcon />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleIconClick}>
                  <PersonIcon />
                </a>
              </>
            ) : (
              <>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={() => handleIconClick('wishlist')}>
                  <FavoriteBorderIcon />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={() => handleIconClick('cart')}>
                  <ShoppingCartIcon />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={() => handleIconClick('account')}>
                  <PersonIcon />
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
      <Modal 
        showModal={showModal}
        handleClose={handleClose}
        handleRequestOtp={handleRequestOtp}
      />
    </div>
  );
}

export default Navigation;