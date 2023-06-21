import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ByeLaws from '../routes/ByeLaws';
import Checklist from '../routes/CheckList';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route path="CheckList" element={<Checklist />} />
          <Route path="ByeLaws" element={<ByeLaws />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
