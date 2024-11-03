import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './i18n'; // Importujte i18n konfiguráciu

import './components/CookieConsentBanner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
