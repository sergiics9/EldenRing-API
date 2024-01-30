import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import './index.scss';
import { AppContextProvider } from './context/context.provider.tsx';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
