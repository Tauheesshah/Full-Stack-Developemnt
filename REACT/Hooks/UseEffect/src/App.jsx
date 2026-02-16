import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = ()=>{
    setCount((prev)=>prev+1)
  }

 // Initializw => mount => update => unmount => initializze    life cycle of components
 // Dependencty => []

  useEffect(()=>{
    console.log("This is Without Dependency")
  })

  useEffect(()=>{
    console.log("This is With empty Dependency")
  },[])

  useEffect(()=>{
    console.log("This is when count updated then this effect Dependency works")
  },[count])

  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default App
