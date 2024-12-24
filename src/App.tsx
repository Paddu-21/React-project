import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tailwind-docs" element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default App;
