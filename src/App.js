// import logo from './logo.svg';
import './App.css';
import Navigation from './customers/components/Navigation/Navigation';
import NavHeader from './customers/components/Navigation/NavHeader';
import MegaMenu from './customers/components/MegaMenu/MegaMenu';
import HomePage from './customers/Pages/HomePage/HomePage';


function App() {
  const messages = [
    'Welcome to Saptosi Jewellers',
    'Explore our latest collections!',
    'Enjoy special discounts this season!',
    'Quality you can trust!',
    'Unique designs for you!'
  ];
  return (
    <div className="">
      <NavHeader messages={messages} />
      <Navigation />
      <MegaMenu />
      <div>
       <HomePage />
      </div>
    
    </div>
  );
}

export default App;
