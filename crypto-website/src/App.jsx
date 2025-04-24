import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Footer from './components/Navbar/Footer/Footer';
import TermsAndConditions from './components/Terms/TermsAndConditions';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if the user already accepted
    const hasAccepted = localStorage.getItem("hasAcceptedTerms");

    if (!hasAccepted) {
      setIsModalOpen(true); // show modal
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hasAcceptedTerms", "true"); // save to localStorage
    setIsModalOpen(false); // hide modal
  };

  return (
    <div className="app">
      {isModalOpen && <TermsAndConditions onClose={handleAccept} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
