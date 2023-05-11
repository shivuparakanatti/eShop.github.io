import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { CartProvider } from 'react-use-cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore()
console.log(store)
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>

    <Provider store={store}>

    <App />
    </Provider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
