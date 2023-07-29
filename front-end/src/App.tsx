import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import SlideData from './components/SlideData';
import SlideIcon from './components/SlideIcon';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
