 import {ActionTypes }from '../contants/ActionTypes'
  
  export const setproducts=(products)=>{
    return{
         type:ActionTypes.SET_PRODUCTS,
         payload:products
    }
  };
  export const selectedproduct=(product)=>{
    return{
         type:ActionTypes.SELECTED_PRODUCTS,
         payload:product
    }
  };
  export const removeselectedproducts=(product)=>{
    return{
         type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
         payload:product
    }
  };
  
