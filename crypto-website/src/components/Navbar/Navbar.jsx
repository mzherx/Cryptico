import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import arrow_icon from "../../assets/arrow_icon.png"; 
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }

      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }

      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      case "pkr": {
        setCurrency({ name: "pkr", symbol: "Rs" });
        break;
      }

      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
          <option value="pkr">PKR</option>
        </select>
        <button>
          Sign up
          <div class="arrow-wrapper">
            <div class="arrow"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
