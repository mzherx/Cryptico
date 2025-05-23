import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);
  const [loading, setLoading] = useState(true);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-TZbMPXM4NmZURev49oJrTZQ6",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => {
        setCoinData(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-TZbMPXM4NmZURev49oJrTZQ6",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setHistoricalData(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="wifi-loader">
          <svg className="circle-outer" viewBox="0 0 86 86">
            <circle className="back" cx="43" cy="43" r="40"></circle>
            <circle className="front" cx="43" cy="43" r="40"></circle>
          </svg>
          <svg className="circle-middle" viewBox="0 0 60 60">
            <circle className="back" cx="30" cy="30" r="27"></circle>
            <circle className="front" cx="30" cy="30" r="27"></circle>
          </svg>
          <svg className="circle-inner" viewBox="0 0 34 34">
            <circle className="back" cx="17" cy="17" r="14"></circle>
            <circle className="front" cx="17" cy="17" r="14"></circle>
          </svg>
          <div className="text" data-text="loading...">
            loading...
          </div>
        </div>
      </div>
    );
  }

  if (coinData && historicalData) {
    const priceChange24h = coinData.market_data.price_change_percentage_24h;
    const priceChangeColor = priceChange24h >= 0 ? "positive" : "negative";

    return (
      <div className="coin-page">
        {/* Header Section with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>

          <div className="coin-header">
            <div className="coin-identity">
              <img
                src={coinData.image.large}
                alt={coinData.name}
                className="coin-logo"
              />
              <div>
                <h1 className="coin-name">
                  {coinData.name}{" "}
                  <span className="coin-symbol">
                    ({coinData.symbol.toUpperCase()})
                  </span>
                </h1>
                <div className="coin-rank">Rank #{coinData.market_cap_rank}</div>
              </div>
            </div>

            <div className="coin-price-section">
              <div className="current-price">
                {currency.symbol}
                {coinData.market_data.current_price[
                  currency.name
                ].toLocaleString()}
              </div>
              <div className={`price-change ${priceChangeColor}`}>
                {priceChange24h >= 0 ? "+" : ""}
                {priceChange24h.toFixed(2)}%
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chart Section with Animation */}
        <motion.div
          className="chart-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <LineChart historicalData={historicalData} />
        </motion.div>

        {/* Stats Section with Animation */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {coinData.market_data && (
            <>
              <motion.div className="stat-card" whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="stat-label">Market Cap</div>
                <div className="stat-value">
                  {currency.symbol}
                  {coinData.market_data.market_cap[currency.name].toLocaleString()}
                </div>
              </motion.div>

              <motion.div className="stat-card" whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="stat-label">24h Trading Volume</div>
                <div className="stat-value">
                  {currency.symbol}
                  {coinData.market_data.total_volume[currency.name].toLocaleString()}
                </div>
              </motion.div>

              <motion.div className="stat-card" whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="stat-label">24h High</div>
                <div className="stat-value">
                  {currency.symbol}
                  {coinData.market_data.high_24h[currency.name].toLocaleString()}
                </div>
              </motion.div>

              <motion.div className="stat-card" whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="stat-label">24h Low</div>
                <div className="stat-value">
                  {currency.symbol}
                  {coinData.market_data.low_24h[currency.name].toLocaleString()}
                </div>
              </motion.div>

              <motion.div className="stat-card" whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="stat-label">Circulating Supply</div>
                <div className="stat-value">
                  {coinData.market_data.circulating_supply.toLocaleString()}{" "}
                  {coinData.symbol.toUpperCase()}
                </div>
              </motion.div>

              <motion.div className="stat-card" whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="stat-label">All Time High</div>
                <div className="stat-value">
                  {currency.symbol}
                  {coinData.market_data.ath[currency.name].toLocaleString()}
                </div>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* Additional Info Section with Animation */}
        <motion.div
          className="info-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>About {coinData.name}</h2>
          <p
            className="coin-description"
            dangerouslySetInnerHTML={{ __html: coinData.description.en }}
          ></p>
        </motion.div>
      </div>
    );
  }

  return null;
};

export default Coin;
