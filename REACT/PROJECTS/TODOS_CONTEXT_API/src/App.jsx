import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoInput } from './Components/TodoInput'
import { Todo } from './Page/Todo'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo/>
    </>
  )
}


