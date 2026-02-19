import React from 'react'
import { useContext } from 'react'

import {TodoInputValue} from "../Context/TodoContext"

export const TodoList = () => {
    const {TodoInputData}=useContext(TodoInputValue)
  
  return (
    <>
      <ul>
        {TodoInputData.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  )
}


