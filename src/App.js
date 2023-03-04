import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Player from './Player';

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/players/:id" element={<Player />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
