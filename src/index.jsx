import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './components/ThemeContext';
import { createGlobalStyle } from 'styled-components'
import App from './components/App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 16px;
    font-family: "Roboto", "Oxygen", "Fira Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.background}
  };

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`


ReactDOM.render(
  <ThemeProvider>
    <GlobalStyle />
    <App />
  </ThemeProvider>
  , document.getElementById('app'));

if (process.env.NODE_ENV === 'development') module.hot.accept();
