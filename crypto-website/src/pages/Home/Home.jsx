import React, { useContext, useEffect, useState, useRef } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const tableRef = useRef(null);
  const isInView = useInView(tableRef, { once: true });

  useEffect(() => {
    if (Array.isArray(allCoin)) {
      setDisplayCoin(allCoin);
    }
  }, [allCoin]);

  const inputHandler = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value === '') {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const filteredCoins = allCoin.filter((coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(filteredCoins);

    // Smooth scroll to table
    setTimeout(() => {
      document.querySelector('.crypto-table')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className='Home'>
      <motion.div
        className='hero'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className='hero'>
          <h1>
            Ultimate Crypto <br /> Exchange Platform
          </h1>
          <p>
            Stay updated with real-time cryptocurrency prices. Sign up to track
            your favorite coins and explore market trends!
          </p>
          <form onSubmit={searchHandler}>
            <input
              type='text'
              value={input}
              onChange={inputHandler}
              placeholder='Search Crypto..'
              list='coinlist'
              required
            />
            <datalist id='coinlist'>
              {allCoin.map((coin, index) => (
                <option key={index} value={coin.name} />
              ))}
            </datalist>
            <button type='submit'>Search</button>
          </form>
        </div>

        {/* Crypto Table with animation on scroll */}
        <motion.div
          ref={tableRef}
          className='crypto-table'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className='table-layout'>
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p style={{ textAlign: 'center' }}>24H Change</p>
            <p className='market-cap'>Market Cap</p>
          </div>

          {displayCoin.length === 0 ? (
            <p className='no-results'>No coins found. Try another search.</p>
          ) : (
            displayCoin.slice(0, 10).map((coin, index) => (
              <Link to={`/coin/${coin.id}`} className='table-layout' key={index}>
                <p>{coin.market_cap_rank}</p>
                <div>
                  <img src={coin.image} alt={coin.name} />
                  <p>{`${coin.name} - ${coin.symbol.toUpperCase()}`}</p>
                </div>
                <p>
                  {currency.symbol} {coin.current_price.toLocaleString()}
                </p>
                <p className={coin.price_change_percentage_24h > 0 ? 'green' : 'red'}>
                  {Math.floor(coin.price_change_percentage_24h * 100) / 100}%
                </p>
                <p className='market-cap'>
                  {currency.symbol} {coin.market_cap.toLocaleString()}
                </p>
              </Link>
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
