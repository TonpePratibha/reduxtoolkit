import {combineReducers} from 'redux'
import  {productReducer, selectedproductreducer}  from '../reducers/productReducer';


const reducers=combineReducers({
   Allproducts: productReducer,
   product:selectedproductreducer,
})
export default reducers;