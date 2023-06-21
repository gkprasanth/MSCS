import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ByeLaws from '../routes/ByeLaws';
import Checklist from '../routes/CheckList';
import BarChart from '../charts/BarChart'

import StateSocieties from '../charts/StateSocieties'

import Dashboard from '../routes/Dashboard';
import Header from './Header';

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          
          <Route path="CheckList" element={<Checklist />} />
          <Route path="ByeLaws" element={<ByeLaws />} />
          <Route path='chart'  element={<StateSocieties/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path="*" element={<p>Not found!</p>} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default App;
