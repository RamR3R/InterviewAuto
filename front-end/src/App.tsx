import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import SlideData from './components/SlideData';
import SlideIcon from './components/SlideIcon';
import Dashboard from './Pages/Dashboard';
import Studymaterial from './Pages/Studymaterial';
import {Login} from './Pages/Login';



function App() {
  return (
    <div className="App">
    <Navbar/>
      <AllRoutes />
     
     
    </div>
  );
}

export default App;
