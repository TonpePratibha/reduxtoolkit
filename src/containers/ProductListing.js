import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from 'react'
import {setproducts} from '../redux/actions/ProductActions';


const ProductListing=()=>{
const dispatch =useDispatch();

const fetchproducts=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products').catch((err)=>{
        console.log(err,'err')
    })
    dispatch(setproducts(response.data))
}
useEffect(()=>{
    fetchproducts();
},[])


    const products= useSelector((state)=>state);
    console.log('products:',products)
    return(
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
    
}
export default ProductListing;