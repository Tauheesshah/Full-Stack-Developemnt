import React, { useState } from 'react'
import { createContext } from 'react'

export const TodoInputValue = createContext(null)

export const TodoContext = ({children}) => {
    const [TodoInputData,setTodoinputData]=useState([])
    const [TodoText,setTodoText]=useState("")
  return (
    <TodoInputValue.Provider value={{TodoInputData,setTodoinputData,TodoText,setTodoText}}>
        {children}
    </TodoInputValue.Provider>
  )
}

