import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
  const state = useSelector((state) => state)
  var ar = []
  state.map((e) => {ar.push(Number(e.qty))})
  var total = ar.reduce((accumulator, currentValue) => accumulator + currentValue,0);
  return (
    <div style={{position:"sticky",top:"0"}}>
      <header className='header'>
        <ul className='header-left'>
            <li className='header-inner-left'>
                <Link to="/" className='icon header-logo'>Mobile Shop</Link>
            </li>
            <li>
                <Link className='icon header-cart' to="/cart"><i className="fa fa-shopping-cart"></i>
                <span className='badge'>{total}</span></Link>
            </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
