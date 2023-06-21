import React, { useState } from 'react';
import axios from 'axios';


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
import StateSocieties from './StateSocieties';


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



function BarChart() {
  

    const [total, setTotal] = useState({})  
    const [vlabel, setLabel] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(()=>{

      async function getdata() {
        try {
          const response = await axios.get('http://localhost:3000/reg_count');
          console.log(response.data);
      
          
          setLabel(response.data.labels);
          setCount(response.data.counts);
          console.log(vlabel)
        } catch (e) {
          console.log(e);
        }
      }
        getdata();
    }, [])



    const labels = vlabel;

 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: count,
      backgroundColor: '#00abad',
    },
    
  ],
};

  return <div
    style={{
        width: "70vw"
    }}
  >
<Bar options={options} data={data} />
    
    <div style={{
      width: '70%',
    }} >
    <PieChart />
    </div>
    <StateSocieties/>
    
  </div>
}

export default BarChart;
