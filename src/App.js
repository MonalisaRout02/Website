import React, { useState } from 'react';
import './App.css';
import Navigation from './customers/components/Navigation/Navigation';
import NavHeader from './customers/components/Navigation/NavHeader';
import MegaMenu from './customers/components/MegaMenu/MegaMenu';
import HomePage from './customers/Pages/HomePage/HomePage';
import Footer from './customers/components/Footer/Footer'
import Wishlist from './customers/Pages/Wishlist/Wishlist';
import Cart from './customers/Pages/Cart/Cart';
import Account from './customers/Pages/Account/Account';


function App() {
  const messages = [
    'Welcome to Saptosi Jewellers',
    'Explore our latest collections!',
    'Enjoy special discounts this season!',
    'Quality you can trust!',
    'Unique designs for you!'
  ];
  
  const [currentView, setCurrentView] = useState('home'); // Default view

  const renderContent = () => {
    switch (currentView) {
      case 'wishlist':
        return <Wishlist />;
      case 'cart':
        return <Cart />;
      case 'account':
        return <Account />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="">
      <NavHeader messages={messages} />
      <Navigation setCurrentView={setCurrentView} />
      <MegaMenu />
      <div>
      {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
