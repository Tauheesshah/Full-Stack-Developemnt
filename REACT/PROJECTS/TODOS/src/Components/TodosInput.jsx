import React, { useState } from 'react'
import { Todos } from './Todos'

export const TodosInput = () => {

    const [text,setText]=useState('')
    const [ todo,setTodo]=useState([])

    const handleAdd=()=>{
        if(text.trim()==='') return;
        const data = {
            id:Date.now(),
            text,
            isEdits:false,
            isCompleted:false,
        };


        setTodo((prev)=>[...prev,data]);
    }

  return (
    <>
      <input type='text' onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      <Todos props={{todo}}/>
    </>
  )
}


