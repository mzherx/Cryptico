import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [scrolled, setScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      setIsTop(window.scrollY < 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currencyHandler = (event) => {
    const currencyMap = {
      usd: { name: "usd", symbol: "$" },
      eur: { name: "eur", symbol: "€" },
      inr: { name: "inr", symbol: "₹" },
      pkr: { name: "pkr", symbol: "Rs" }
    };
    setCurrency(currencyMap[event.target.value] || currencyMap.usd);
  };

  return (
    <nav className={`navbar ${scrolled ? "floating" : ""} ${isTop ? "at-top" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Crypto Exchange Logo" className="logo" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/features" className="nav-link">Features</Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
        </ul>

        <div className="nav-right">
          <div className="currency-selector">
            <select onChange={currencyHandler} className="currency-dropdown">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
              <option value="pkr">PKR</option>
            </select>
          </div>
          <button className="signup-button">
            <span>Get Started</span>
            <div className="button-arrow">
              <svg viewBox="0 0 16 16">
                <path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;