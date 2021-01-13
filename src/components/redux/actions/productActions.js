import * as types from './actionTypes';
import DisplayOfProductListApi from "../../../data/DisplayOfProductListApi"
import axios from 'axios';
export function loadProductsSuccess(products){
    return {
        type : types.LOAD_PRODUCTS_SUCCESS,
        products
    }
}

export function addProductSuccess(product){
    return {
        type: types.ADD_PRODUCT_SUCCESS,
        product
    }
}

export function updateProductSuccess(productdetails){
    return {
        type : types.UPDATE_PRODUCT_SUCCESS,
        productdetails

    }
}

export function deleteProductSuccess(id){
    return {
        type:types.DELETE_PRODUCT_SUCCESS,
        id
    }
}

export function addViewProductSucess(updatedProductDetails){
    return {
        type : types.COUNT_VIEW_PRODUCT_SUCCESS,
        updatedProductDetails
    }
}

export function getListOfProducts(){
    return dispatch=>{
      return  DisplayOfProductListApi.getListOfAllProducts().then(products=>{
         // console.log(products);
          dispatch(loadProductsSuccess(products));
      }).catch(error=>console.log(error))
    }
}

export function addProduct(product){
    return dispatch=>{
        return DisplayOfProductListApi.postProductDetails(product).then(product=>{
            //console.log(product)
            dispatch(addProductSuccess(product));
        }).catch(error=>{console.log(error)})
    }
}


export const updateProduct=(productDetails)=>{
   // console.log(productDetails);
    return dispatch=>{
        axios.put(`http://localhost:4000/products/${productDetails.id}`,productDetails).then(response=>{
            dispatch(updateProductSuccess(response.data))
        }).catch(error=>{console.log(error)})
    }
}

export const deleteProduct=(id)=>{
  return dispatch=>{
      return DisplayOfProductListApi.deleteProduct(id).then(product=>{
       // console.log(product)
        dispatch(deleteProductSuccess(id))})
  }
}


export const addViewProduct=(productDetails)=>{
  //  console.log(productDetails);

    return dispatch=>{
        axios.put(`http://localhost:4000/products/${productDetails.id}`,productDetails).then(response=>{
            console.log(response.data);
            dispatch(addViewProductSucess(response.data))
        }).catch(error=>console.log(error))
    }
}