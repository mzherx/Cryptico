import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Footer from './components/Navbar/Footer/Footer';
import TermsAndConditions from './components/Terms/TermsAndConditions';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Start with the modal open

  const handleClose = () => {
    setIsModalOpen(false); // Close the modal when the user accepts or declines
  };

  return (
    <div className='app'>
      
      {isModalOpen && <TermsAndConditions onClose={handleClose} />}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
