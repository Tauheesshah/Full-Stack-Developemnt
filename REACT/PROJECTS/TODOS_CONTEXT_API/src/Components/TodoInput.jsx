import React, { useState } from 'react'
import { useContext } from 'react'

import {TodoInputValue} from "../Context/TodoContext"

export const TodoInput = () => {

  const {TodoInputData}=useContext(TodoInputValue)
  const {setTodoinputData}=useContext(TodoInputValue)

  const {TodoText}=useContext(TodoInputValue)
  const {setTodoText}=useContext(TodoInputValue)

  

  const handleAdd=()=>{
    if (TodoText.trim() === '') return;
    setTodoinputData([...TodoInputData, TodoText]);
    setTodoText('');
  }

  return (

    <>
      <input type='text' placeholder='Enter the Task....' value={TodoText} onChange={(e) => setTodoText(e.target.value)}></input>
      <button onClick={handleAdd}>Add</button>
    </>
  )
}

