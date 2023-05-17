import React from 'react'
import Data from './Data'
import {useParams} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/Actions/index';

const Mobile = () => {
    const {productId} = useParams()
    const thisProduct = Data.find(prod => prod.id === productId)
    const dispatch = useDispatch();
    const addProduct = (e) => {
        dispatch(addCart(e));
    }
  return (
    <div className='details-page'>
        <img className='details-page-image' style={{}} src={thisProduct.image} alt='destination image'/>
        <div className='right-contents'>
            <div className='mobile-name'>{thisProduct.name} ({thisProduct.details})</div>
            <div className='description'>{thisProduct.description}</div>
            <div className='price'style={{marginTop:"20px"}}>Price ${thisProduct.price}</div>
            <button onClick={() => addProduct(thisProduct)} className='inside-addcart addcart' style={{marginTop:"20px"}}>Add to cart</button>
        </div>
      
    </div>
  )
}

export default Mobile
