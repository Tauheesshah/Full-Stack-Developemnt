import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoInput } from './Components/TodoInput'
import { Todolist } from './Components/Todolist'

function App() {

  return (
    <>
      <TodoInput/>
      <Todolist/>
    </>
  )
}

export default App
