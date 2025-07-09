import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SuccessPage from './pages/SuccessPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
};

export default App;