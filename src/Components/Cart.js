import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { delCart, addCart } from '../Redux/Actions/index';

const Cart = () => {

// Get the data from store
  var ar = []
  const state = useSelector((state) => state)
  const dispatch = useDispatch();
  const delProduct = (e) => {
    dispatch(delCart(e));
    handleApply()
  }
  const addProduct = (e) => {
    dispatch(addCart(e));
    handleApply()
  }

// Add the value in total
  state.map((e) => {ar.push(Number(e.price *e.qty))})
  var total = ar.reduce((accumulator, currentValue) => accumulator + currentValue,0);

// Calculate the discount
  var wd
  const handleApply = () => {
    var coupon_code = document.getElementsByClassName("coupon-text")[0].value
    document.getElementsByClassName("coupon-preview")[0].innerHTML = coupon_code
    if (coupon_code == "APPLY100"){
      wd = (total * 7.5 / 100).toFixed(1)
      document.getElementsByClassName("discount")[0].innerHTML = wd
      document.getElementsByClassName("subtotal")[0].innerHTML = (total - wd)
      document.getElementsByClassName("applied-not-applied")[0].innerHTML = " is Applied"
    }
    else{
      document.getElementsByClassName("applied-not-applied")[0].innerHTML = " coupon code is not Valid"
    }
  }

  return (
    <div className='container'>
      <div className='cart-left'>
      {state.map((arr) => {
        return (
          <div className='cart-div'>
            <img src={arr.image}/>
            <div>
              <div className='mobile-name cart-name'>{arr.name} ({arr.details})</div>
              <div className='cart-product-price'>&#8377; {arr.price}</div>
              <div className='update'>
                <button onClick={() => delProduct(arr)} className='plus'>-</button>
                <span className='quantity'>{arr.qty}</span>
                <button onClick={() => addProduct(arr)} className='minus'>+</button>
              </div>  
            </div>
            {/* <button onClick={() => delProduct(arr)} className='delete-cart'>Delete</button> */}
          </div>
        )
      })}
      </div>
      <div className='cart-right'>
          <div className='card-right-form'>
            <div className='summary'>
              Order Summary
            </div>
            <div className='cart-total'><span> Total:</span><span className='right-content'>&#8377; {total}</span> </div><hr/>
            <div className='cart-taxes'><span> Taxes:</span><span className='right-content'>&#8377; 0</span> </div><hr/>
            <div className='cart-discount'><span> Discount: </span><span className='right-content'>&#8377;<span className='discount'> 0</span></span> </div><hr/>
            <div className='cart-subtotal'><span> Sub Total: </span><span className='right-content'>&#8377;<span className='subtotal'> {total}</span></span> </div>  
          </div>
          <div className='coupon'>
            <input type='text' className='coupon-text' placeholder='Enter Coupon Code'/>
            <button className='apply-button' onClick={() => handleApply()}>Apply</button>
            <div className='coupon-applied'>
              <span className='coupon-preview'></span>
              <span className='applied-not-applied'></span>
            </div>
          </div>
      </div>
    </div>

  )
}

export default Cart
