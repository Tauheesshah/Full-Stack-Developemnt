import React from 'react'
import {Routes,Route} from "react-router-dom"

import {Home} from "../Pages/Home"
import {About} from "../Pages/About"
import {Counter} from "../Pages/Counter"
import {Todo} from "../Pages/Todo"
import {PrivateRoutes} from "../Components/PrivateRoutes"
import { User } from '../Pages/User'
import {Login} from "../Pages/login"

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/user' element={
          <PrivateRoutes><User /></PrivateRoutes>
        }>
        </Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default AllRoutes
