
import { ADD_PRODUCT_SUCCESS, COUNT_VIEW_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, LOAD_PRODUCTS_SUCCESS, UPDATE_PRODUCT_SUCCESS } from '../actions/actionTypes';
import {initialState} from './initialState';

const productReducer=(prevState=initialState.products,action)=>{
   // console.log(action);
    switch(action.type){
        case LOAD_PRODUCTS_SUCCESS : 
      //  console.log([...action.products])
            return [...action.products];
        case ADD_PRODUCT_SUCCESS : 
        return [
            ...prevState,
            Object.assign({}, action.product)
        ]

        case UPDATE_PRODUCT_SUCCESS : 
      
        return prevState.map((item) => {
            if (item.id !== action.productdetails.id) {
             
              return item
            }        
            return {
              ...action.productdetails
            }
          })

        case DELETE_PRODUCT_SUCCESS:

            let newState=prevState.filter(item=>item.id!==action.id)
            return newState;

        case COUNT_VIEW_PRODUCT_SUCCESS : 
        
        return prevState.map((item) => {
          if (item.id !== action.updatedProductDetails.id) {
           
            return item
          }        
          return {
            ...action.updatedProductDetails
          }
        })

      


        default : return prevState;
    }
}

export default productReducer; 