import {createContext,useState} from 'react';

export const TodosValContext = createContext(null)

export const TodosContext = ({children}) => {
  const [todo,setTodo]=useState([])
  const [text,setText]=useState('')
  return (
    <TodosValContext.Provider value={{todo,text,setTodo,setText}}>
      {children}
    </TodosValContext.Provider>
  )
}


