import { useDispatch, useSelector } from 'react-redux';
import * as types from '../Redux/todos/Action';

export const TodoList = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todo);

  const handleEdit = (id) => {
    dispatch({ type: types.EDITS_TODO_ITEMS, payload: id });
  };

  const handleDel = (id) => {
    dispatch({ type: types.DELETE_TODO_ITEMS, payload: id });
  };

  return (
    <>
      <h3> TodoList</h3>
      {todo.map((el) => (
        <div key={el.id}>
          <p>{el.text}</p>
          <button onClick={() => handleEdit(el.id)}>Edit</button>
          <button onClick={() => handleDel(el.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};
