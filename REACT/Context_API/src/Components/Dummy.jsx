import React from 'react'
import { useContext } from 'react'

import { ContextValue } from '../Context/ContextCounter'

export const Dummy = ({}) => {
   const {count}=useContext(ContextValue)
  return (
    <h1>Dummy {count}</h1>
  )
}


