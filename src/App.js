import logo from './logo.svg';
import './App.css';
import Navigation from './customers/components/Navigation/Navigation';
import HomePage from './customers/Pages/HomePage/HomePage';


function App() {
  return (
    <div className="">
      <Navigation />
      <div>
       <HomePage />
      </div>
    
    </div>
  );
}

export default App;
