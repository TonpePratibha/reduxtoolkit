//import React from 'react';
import {ActionTypes} from '../contants/ActionTypes';
const initialstate={
    products:[],
} 

export const productReducer=(state=initialstate,{type,payload})=> {
  
switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload};
        

    default:
        return state;
}
}

export const selectedproductreducer=(state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
    
        default:
            return state;
    }
}
