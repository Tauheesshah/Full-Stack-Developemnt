import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { InputBox } from './Components/InputBox'

export function App() {
  const [value, setValue] = useState('')

  return (
    <>
    <h1>OPT Boxes</h1>
      <InputBox label={'OTP Boxes'} length={4}/>
      {/* <h3>{value}</h3> */}
    </>
  )
}

 
