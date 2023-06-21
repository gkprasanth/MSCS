import React, { useState } from 'react';
import dataSet from '../data/state_societies.json'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import { PieChart } from './PieChart';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Registration count each day',
    },
    tooltip: {
      enabled: true,
      
   },
  },
};



function StateSocieties() {
 const data = {
  labels: dataSet.state,
  datasets: [
    {
      label: 'Dataset 1',
      data: dataSet.count,
      backgroundColor: '#00abad',
    },
    
  ],
};

  return <Bar options={options} data={data} />
    
    

    
  
}

export default StateSocieties;
