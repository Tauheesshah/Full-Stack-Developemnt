import React, { useContext } from 'react'
import { CounterValContext } from '../Context/CounterContext'
import {Button} from "../Components/Button"

export const Counter = () => {

  const {count,setCount}=useContext(CounterValContext)

  const handleInc = ()=>{
        setCount((prev)=>prev+1)
    }
    const handleDec = ()=>{
        setCount((prev)=>prev-1)
    }
    const handleRes = ()=>{
        setCount(()=>0)
    }
  const data =[
    {name:"increment", func: handleInc},
    {name:"decrement", func: handleDec},
    {name:"reset", func: handleRes},
  ];

  return (
    <>
      <h1>Counter {count}</h1>
      {data?.map((el)=>(
        <Button props={el} />
      ))}
    </>
  )
}


