"use client"

import React from 'react';
import { Line } from 'react-chartjs-2';



const HeartRate = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 20, 15, 25, 30, 35, 40],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };


  const options = {
    scales: {
      yAxes: [{ ticks: { beginAtZero: true } }],
    },
  };

  return (
    <div>
      <h2>HeartRate Example</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default HeartRate;
