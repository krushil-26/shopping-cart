import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Home from './Components/Home';
import Mobile from './Components/Mobile';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/mobile/:productId" element={<Mobile/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App