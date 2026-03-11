import React, { useEffect, useState } from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0);

    const handleIncrement = ()=>{
        setCount(count + 1)
    }
    const handleDecrement = ()=>{
        setCount(count + 1)
    }

    useEffect(()=>{
        let id = setInterval(()=>{
            console.log('timmer',Date.now())
        },200)
        console.log(id)
        return ()=> {
            clearInterval(id)
        }
    },[count])
  return (
    <>

    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>

      
    </>
  )
}


