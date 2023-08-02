import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import './index.css';

import PROJECT_THEME from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={PROJECT_THEME}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
