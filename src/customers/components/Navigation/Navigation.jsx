import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Modal from '../Modal/Modal';

function Navigation() {
  const [isSignedIn, setIsSignedIn] = useState(false);
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

  const handleIconClick = () => {
    if (!isSignedIn) {
      setShowModal(true);
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
    <div className='sticky top-0 z-10 w-full bg-stone-200'>
      <nav className="bg-white w-full">
        <div className="flex items-center justify-between py-2 bg-stone-200 w-full px-4">
          
          {/* Left Section: Logo and Title */}
          <div className="flex items-center space-x-2">
            <img src="saptosi_logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold text-gray-800">Saptosi Jewellers</span>
          </div>

          {/* Center Section: Search Bar */}
          <div className="flex-grow max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Gold, Silver, Necklace..."
                className="border rounded-sm py-1 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Right Section: Conditional Links and Icons */}
          <div className="flex items-center space-x-4">
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
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <FavoriteBorderIcon />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <ShoppingCartIcon />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
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
