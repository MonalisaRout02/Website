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
import AboutUs from './customers/Pages/AboutUs/AboutUs';
import Products from './customers/Pages/Product/Products';
import SingleProduct from './customers/components/Products/SingleProduct';


function App() {
  const messages = [
    'Welcome to Saptosi Jewellers',
    'Explore our latest collections!',
    'Enjoy special discounts this season!',
    'Quality you can trust!',
    'Unique designs for you!'
  ];
  
  const [currentView, setCurrentView] = useState('home'); // Default view
  const [showAccountModal, setShowAccountModal] = useState(false); // State for showing account modal
  const [userData, setUserData] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);


  const renderContent = () => {
    switch (currentView) {
      case 'wishlist':
        return <Wishlist userData={userData} />;
      case 'cart':
        return <Cart userData={userData}/>;
      case 'aboutus':
        return <AboutUs />;
      case 'Products':
        return <Products setCurrentView={setCurrentView} category={category} setCategory={setCategory} setProduct={setProduct} userData={userData} setShowModal={setShowModal} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />;
      case 'SingleProduct':
        return <SingleProduct setCurrentView={setCurrentView} product={product} setShowModal={setShowModal} isFavorite={isFavorite} setIsFavorite={setIsFavorite} userData={userData} />;
      default:
        // return <AboutUs />;
        return <HomePage setCurrentView={setCurrentView}/>;
    }
  };

  return (
    <div className="">
      <NavHeader messages={messages} />
      <Navigation setCurrentView={setCurrentView} setUserData={setUserData} setShowAccountModal={setShowAccountModal} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} showModal={showModal} setShowModal={setShowModal} />
      <MegaMenu setCurrentView={setCurrentView} setCategory={setCategory} showModal={showModal} setShowModal={setShowModal} />
      <div>
        {renderContent()}
      </div>
        {showAccountModal && <Account showModal={showAccountModal} userData={userData} handleClose={() => setShowAccountModal(false)} setIsSignedIn={setIsSignedIn} setUserData={setUserData}/>}
      <Footer />
    </div>
  );
}

export default App;
