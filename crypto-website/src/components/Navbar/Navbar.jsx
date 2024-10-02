import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) =>{
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }

      case "eur": {
        setCurrency({name: "eur", symbol: "€"})
        break;
      }
      
      case "inr": {
        setCurrency({name: "inr", symbol: "₹"})
        break;
      }

      default: {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
    }

    
  }
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign up <img src={arrow_icon}></img></button>
        </div>
    </div>
  )
}

export default Navbar

