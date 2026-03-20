import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameShow from './Components/NameShow'
import NameShow2 from './Components/NameShow2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Props Validation - Props Overview - Default Props</h1>
      <NameShow label={'Shah'} age={21}/>
      <NameShow/>
      <NameShow age={99}/>


      <NameShow2/>
      <NameShow2 name='Tauheed' age='100' label='fsd'/>
      <NameShow2 name='Tauheed' age='999'/>
    </>
  )
}

export default App
