import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import CreateAd from './CreateAd';
import DisplayAdData from './DisplayAdData';
import './style.css';
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createAd" element={<CreateAd />} />
        <Route path="/next/:selectedAd" element={<DisplayAdData />} />
      </Routes>
    </div>
  );
}
