import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './components/ThemeContext';
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
  , document.getElementById('app'));

if (process.env.NODE_ENV === 'development') module.hot.accept();
