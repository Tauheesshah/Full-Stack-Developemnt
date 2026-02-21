import React, { useContext } from 'react';
import { TodosValContext } from "../Context/TodoContext";

export const TodoInput = () => {

  const { todo, setTodo, text, setText } = useContext(TodosValContext);

  const handleAdd = () => {
    if (text.trim() === '') return;

    const newTodo = {
      id:Date.now(),
      text,
      isEdit:false,
      isChecked:false,
      isPinned:false,
    };

    setTodo([...todo, newTodo]);
    setText('');
       
  };

  return (
    <>
      <input
        type='text'
        placeholder='Enter the Task....'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};