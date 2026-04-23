import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import MyStory from './MyStory';

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/my-story" element={<MyStory />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
