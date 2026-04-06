import React, { useState } from 'react';
import { Button } from './Button';
import { addTodo } from '../Redux/TodoSlicer';
import { useDispatch } from 'react-redux';

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <Button
        functions={() => {
          dispatch(addTodo(text));
        }}
        label={'Add'}
      />
    </div>
  );
};