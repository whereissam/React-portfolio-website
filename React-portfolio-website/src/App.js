import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './compomemts/Layout';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}></Route>
    </Routes>
    </>
  );
}

export default App;
