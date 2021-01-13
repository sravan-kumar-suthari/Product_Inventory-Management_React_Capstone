import {createStore} from "redux";
import rootReducer from "../reducers";
import {applyMiddleware} from 'redux'
import thunk from "redux-thunk";


  
const store=new createStore(rootReducer,applyMiddleware(thunk));

export default store;