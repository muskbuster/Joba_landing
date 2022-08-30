import React from 'react';
import ReactDOM from 'react-dom';
import { initContract } from './utils'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <App />,
      document.querySelector('#root')
    )
  })
  .catch(console.error)