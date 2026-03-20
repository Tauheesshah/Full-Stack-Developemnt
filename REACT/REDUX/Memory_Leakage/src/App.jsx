import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Counter} from './Components/Counter'

function App() {
  const [toggle, setToggle] = useState(null)

  return (
    <>
      {toggle && <Counter/>}
      <button onClick={()=>setToggle(!toggle)}>toggle</button>
    </>
  )
}

export default App
