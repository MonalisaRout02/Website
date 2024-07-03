import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Modal from '../Modal/Modal';

function Navigation({ setCurrentView, setShowAccountModal, setUserData, isSignedIn, setIsSignedIn, showModal, setShowModal }) {
  
    useEffect(() => {
    const localUserData = localStorage.getItem('userData');
    if (localUserData) {
      setIsSignedIn(true);
      setUserData(localUserData)
    } else {
      setIsSignedIn(false);
    }
  }, [setIsSignedIn, setUserData]);

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
      if (view === 'account') {
        setShowAccountModal(true);
      } else {
        setCurrentView(view);
      }
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSignIn = () => {
    setShowModal(false);
    setShowAccountModal(true); // Show Account component after successful sign-in
  };
  
  return (
    <div className="sticky top-0 z-10 w-full">
      <nav className="bg-white sticky top-0 z-10 w-full">
        <div className="flex items-center justify-between py-1 bg-stone-200 w-full px-4">
          
          {/* Left Section: Logo and Title */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentView('home')}>
            <img src="saptosi_logo.png" alt="Logo" className="h-11 w-11" />
            <div className="flex flex-col space-y-0">
              <span className="text-xl font-cinzel-decorative font-semibold text-gray-800">Saptosi</span>
              <span className="font-cinzel-decorative text-xs">Chain of Jewellers</span>
            </div>
          </div>

          {/* Center Section: Search Bar */}
          <div className="flex-grow flex justify-center mx-4">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search for Gold, Silver, Necklace..."
                className="border rounded-sm py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-orange-100"
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
        setUserData={setUserData}
        setIsSignedIn={setIsSignedIn}
        onSignIn={handleSignIn}
      />
    </div>
  );
}

export default Navigation;
