import React from 'react'
import {TodoInput} from "../Components/TodoInput"
import { TodoList } from '../Components/TodoList'

export const Todo = () => {
  return (
    <>
      <h1>Todos</h1>
      <TodoInput />
      <TodoList />
    </>
  )
}

