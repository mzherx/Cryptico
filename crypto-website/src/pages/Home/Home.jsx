import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';

const Home = () => {
  // Correct useContext usage
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  // Ensure that allCoin is an array or use an empty array as a fallback
  useEffect(() => {
    if (allCoin && Array.isArray(allCoin)) {
      setDisplayCoin(allCoin);
    }
  }, [allCoin]);

  return (
    <div className='Home'>
      <div className="hero">
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to World Largest Cryptocurrency marketplace. Sign up to explore more about cryptos</p>
        <form>
          <input type="text" placeholder='Search Crypto..' />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>

        {displayCoin.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + " - "+ item.symbol}</p>
            </div>
            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
            <p>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
            <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
