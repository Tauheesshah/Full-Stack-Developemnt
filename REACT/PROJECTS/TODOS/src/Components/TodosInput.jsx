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
            isChecked:false,
            isPinned:false,
        };

        setTodo((prev)=>[...prev,data]);
        setText('')
    }



  return (
    <div className="MainDiv">
      <div className="input-row">
        <input value={text} type='text' name='todo_input'placeholder="Add todo..."  onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
      </div>
      <Todos props={{todo,setTodo}}/>
    </div>
  )
}


