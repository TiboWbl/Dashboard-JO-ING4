/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

import './index.css';
import Dashboard from './components/dashboard/dashboard';
import reportWebVitals from './reportWebVitals';
import Pop from './Autocomplete';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Autocomplete2 from './Autocomplete2';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
    <App />
    
  </React.StrictMode>
);

reportWebVitals();
