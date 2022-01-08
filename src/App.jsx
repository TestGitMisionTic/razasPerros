import './styles/App.css';
import React from "react";
import Index from './pages/Index';
import Beagle from './pages/Beagle';
import BorderCollie from './pages/BorderCollie';
import Doberman from './pages/Doberman';
import FreshPoodle from './pages/FreshPoodle';
import GoldenRetriever from './pages/GoldenRetriever';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>

            <Route exact path='/' element={<Index />} />
            <Route exact path='/Beagle' element={<Beagle />} />
            <Route exact path='/BorderCollie' element={<BorderCollie />} />
            <Route exact path='/Doberman' element={<Doberman />} />
            <Route exact path='/FreshPoodle' element={<FreshPoodle />} />
            <Route exact path='/GoldenRetriever' element={<GoldenRetriever />} />

          </Routes>

        </Layout>

      </BrowserRouter>
    </div>
  );
}


export default App;
