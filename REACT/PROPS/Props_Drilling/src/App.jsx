import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { Countes } from './Components/Countes'
import { AxiosData } from './Components/AxiosData'

export function App() {
  const [count, setCount] = useState(0);
  const API='https://fakestoreapi.com/products'
  return (
    <>
      <h1 id='count'>Count {count}</h1>
      <Countes props={{setCount}}/>

      {/* <Data props={{data}}/> */}

      <AxiosData url={API}/>
    </>
  )
}
