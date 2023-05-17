import React from 'react';
import Data from './Data';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addCart } from '../Redux/Actions/index';

const Home = () => {
  const [data, setData] = useState(Data);
  const dispatch = useDispatch();
    const addProduct = (e, event) => {
        dispatch(addCart(e));
        document.getElementsByClassName("addcart")[e.id -1].innerHTML = "Added"
    }
  return (
    <div className='mobile'>
      {
          data.map((e) => {
            return (
              <>
                <div className='contents'>
                  <img src={e.image} className='home-image'/>
                  <div className='price_name'>
                    <p className='name'>{e.name}</p>
                    <p className='price'>&#8377; {e.price}</p>
                  </div>
                  <button onClick={(i) => addProduct(e,i)} className='addcart'>Add to Cart</button>
                  <button className='view-details'><Link to={`/mobile/${e.id}`}>View Details</Link></button>
                </div>
              </>
            )
          })
        }
    </div>

    
  )}
export default Home