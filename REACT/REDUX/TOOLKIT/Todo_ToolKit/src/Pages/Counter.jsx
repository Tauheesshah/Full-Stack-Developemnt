import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/counterSlicer';

export const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counter);

  console.log('🚀 ~ count:', count);

  return (
    <>
      <div>Counter {count}</div>
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
    </>
  );
};