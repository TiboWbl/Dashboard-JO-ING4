import './index.css';
import Dashboard from './dashboard';
import reportWebVitals from './reportWebVitals';
import Pop from './Autocomplete';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Autocomplete2 from './Autocomplete2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
    <Pop/>
    <Autocomplete2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
