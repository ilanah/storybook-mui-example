import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { themes } from './themes';

import './index.css';
import '@fontsource/assistant/300.css';
import '@fontsource/assistant/400.css';
import '@fontsource/assistant/500.css';
import '@fontsource/assistant/700.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.dark}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
