import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// https://financialmodelingprep.com/developer/docs
// https://www.youtube.com/watch?v=UsL46JwBZwk&t=575s
// React Redux API Request With Redux and Chart.js - React Javascript Tutorial

// https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=demo

// https://financialmodelingprep.com/api/v3/historical-chart/1min/BTCUSD?apikey=deme