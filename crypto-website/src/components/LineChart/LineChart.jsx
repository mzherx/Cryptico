import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

// Accept historicalData as a prop
const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [['Date', 'Prices']];

    // Check if historicalData and prices exist before mapping
    if (historicalData && historicalData.prices) {
      historicalData.prices.forEach((item) => {
        // Convert timestamp to a readable date format
        dataCopy.push([new Date(item[0]).toLocaleDateString(), item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]); // Effect depends on historicalData

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      legendToggle
    />
  );
};

export default LineChart;
