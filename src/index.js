import React from "react";
import ReactDOM from "react-dom";
import './styles/owfont-regular.css';
import './styles/index.css';
import { App } from './components/app.jsx';
import { store } from './store/store.js'
import { Provider } from "react-redux";

// ==========================================

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);