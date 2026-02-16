import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function App() {


  //using useSate

  // const [text,setText]=useState('');
  // console.log(text)
  
  const inputValue = useRef(null)

  const showData = ()=>{
    const answer = inputValue.current.value;
    console.log(answer)
  }
  return (
    <>

      {/* using UseSate */}
      {/* <input type='text' onChange={(e)=>setText(e.target.value)}/> */}


      {/* using UseRef  */}
      <input type='text' ref={inputValue}/>
      <button onClick={showData}>click</button>
    </>
  )
}

