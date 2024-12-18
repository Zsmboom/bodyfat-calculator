import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import CalorieDeficit from './pages/CalorieDeficit';
import BodyFatGuide from './pages/BodyFatGuide';
import HealthyLiving from './pages/HealthyLiving';
import Meditation from './pages/Meditation';

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/calorie-deficit" element={<CalorieDeficit />} />
            <Route path="/body-fat" element={<BodyFatGuide />} />
            <Route path="/healthy-living" element={<HealthyLiving />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;