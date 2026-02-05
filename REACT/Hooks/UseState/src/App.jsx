import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // without hooks

  // let count=[0]
  // const handleDec=()=>{
  //   count--
  //   document.getElementById('count').innerText=`count ${count}`
  // }
  //   const handleInc=()=>{
  //   count++
  //   document.getElementById('count').innerText=`count ${count}`
  // }


  // with hooks useState
  const [count, setCount] = useState(0)
  const handleDec=()=>{
   setCount((prv)=>prv-1)
  }
  const handleInc=()=>{
    setCount((prv)=>prv+1)
  }


  return (
    <>
      <h1 id="count">count {count}</h1>
      <button onClick={handleDec}>dec</button>
      <button onClick={handleInc}>inc</button>
    </>
  )
}

export default App
