import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Navigation from "./components/Navigation/Navigation";

ReactDOM.render(
  <React.StrictMode>
      <Navigation/>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);