import { useDispatch } from 'react-redux';
import { ADD_TODO_ITEMS } from '../Redux/Todos/Action';
import { useRef } from 'react';

export const TodoInput = () => {
  const datavalue = useRef(null);
  const dispatch = useDispatch();

  const addTodos = () => {
    let values = datavalue.current.value;

    let todos = {
      text: values,
      isEdit: false,
      isCompleted: false,
    };

    dispatch({ type: ADD_TODO_ITEMS, payload: todos });
  };

  return (
    <>
      <h1>Add Todo</h1>
      <input type="text" placeholder="Enter task" ref={datavalue} />
      <button onClick={addTodos}>Add Task </button>
    </>
  );
};
