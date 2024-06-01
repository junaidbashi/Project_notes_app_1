import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css'; // Assuming you have a separate index.css for global styles
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
