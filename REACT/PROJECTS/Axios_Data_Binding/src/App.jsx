import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Navbar } from './Components/Navbar'
import { Products } from './Pages/Products'
import { SingleProducts } from './Pages/SingleProducts';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Routes>
          {/* <Route path="/users" element={<Users />} /> */}
          <Route path="Products" element={<Products />} />
          <Route path="/Products/:id" element={<SingleProducts />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/auth" element={<Auth />} /> */}
        </Routes>
    </>
  )
}


