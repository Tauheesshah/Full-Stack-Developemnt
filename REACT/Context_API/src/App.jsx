import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Counter} from './Components/Counter'
import {Button} from './Components/Button'
import {Dummy} from './Components/Dummy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <div 
      style={{
        display:"flex",
        justifyContent:"Center",
        alignContent:"center",
        gap:"10px"
      }}>
        <h1>Counter</h1>
        <Counter />
      </div>
      <Button />
      <Dummy />
    </>
  )
}

export default App
