import React from 'react'
import { useContext } from 'react'

import { ContextValue } from '../Context/ContextCounter'

export const Counter = () => {
    const {count}=useContext(ContextValue)
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}


