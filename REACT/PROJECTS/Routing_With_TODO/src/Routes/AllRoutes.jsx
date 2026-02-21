import React from 'react'
import {Routes,Route} from "react-router-dom"

import {Home} from "../Pages/Home"
import {About} from "../Pages/About"
import {Counter} from "../Pages/Counter"
import {Todo} from "../Pages/Todo"

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  )
}

export default AllRoutes
