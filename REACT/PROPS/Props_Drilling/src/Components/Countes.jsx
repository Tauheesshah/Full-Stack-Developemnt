import React from 'react'

export const Countes = ({props}) => {
    const handleDec = ()=>{
        props.setCount((prv)=>prv-1)
    };

    const handleInc = ()=>{
        props.setCount((prv)=>prv+1)
    };
  return (
    <>
      <button onClick={handleDec}>dec</button>
      <button onClick={handleInc}>inc</button>
    </>
  )
}

