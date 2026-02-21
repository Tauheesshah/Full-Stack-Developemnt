import {createContext,useState} from 'react';

export const CounterValContext = createContext(null)

export const CounterContext = ({children}) => {
  const [count,setCount]=useState(0)
  return (
    <CounterValContext.Provider value={{count,setCount}}>
      {children}
    </CounterValContext.Provider>
  )
}


