import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import MyStory from './MyStory';
import WaterUtilitiesProjectLog from './WaterUtilitiesProjectLog';
import FetchrProjectLog from './FetchrProjectLog';

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/my-story" element={<MyStory />} />
        <Route path="/project-log/water-utilities-dashboard" element={<WaterUtilitiesProjectLog />} />
        <Route path="/project-log/fetchr" element={<FetchrProjectLog />} />

      </Routes>
    </Router>
  );
}

export default MainRouter;
