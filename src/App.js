import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './compomemts/Layout';
import Home from './compomemts/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home></Home>}></Route>
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
