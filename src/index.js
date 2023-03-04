import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Router>
      <App />
    </Router> */}
    <App />
  </StrictMode>
);
