import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ScratchCounterToolkit } from './Pages/ScratchCounterToolkit'
import {Todo} from "./Pages/Todo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter />
     <Todo/> */}
     <ScratchCounterToolkit/>
    </>
  )
}

export default App
