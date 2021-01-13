import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from "react-redux";
import store from "./components/redux/store/configureStore";
//import {getListOfProducts} from "./components/redux/actions/productActions";
import {loadUsers} from "./components/redux/actions/userActions";
import { BrowserRouter } from 'react-router-dom';


//store.dispatch(getListOfProducts());

store.dispatch(loadUsers());

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
   </BrowserRouter>
    </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
