import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Account } from './Components/Account'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>App</h2>
      <Account />
    </>
  )
}


