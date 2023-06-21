import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);



export function PieChart() {

  const [vlabel, setLabel] = useState([]);
    const [count, setCount] = useState([]);

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

  useEffect(()=>{
    getdata();
  }, [])




  const data = {
    labels:['Credit', 'Agro', 'Health/Hospital', 'Federation', 'Housing', 'Tourism', 'Fisheries', 'Construction', 'Others', 'Cooperative Bank', 'Industrial/Textile', 'Marketing', 'Dair  y']
    ,
    datasets: [
      {
        label: '# of registrations',
        data:  [7, 52, 9, 2, 5, 1, 5, 1, 3, 10, 2, 2, 1],
        backgroundColor: [
          'green',
          'blue',
          'red',
          'yellow',
          'orange',
          'violet',
          'black',
          'Lavender',
          'Teal',
          'Cyan',
          'Brown',
          'Pink'
        ],
        borderColor: [
          'green',
          'blue',
          'red',
          'yellow',
          'orange',
          'violet',
          'black',
          'Lavender',
          'Teal',
          'Cyan',
          'Brown',
          'Pink',
          'Brown'
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />
}