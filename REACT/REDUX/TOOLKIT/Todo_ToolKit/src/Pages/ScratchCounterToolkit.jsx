import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/UnderStanding_ToolKit/ActionToolKit';
import { Button } from '../Components/Button';

export const ScratchCounterToolkit = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.scratchReducer);

  console.log('🚀 ~ count:', count);

  return (
    <>
      <div>Counter {count}</div>

      <Button
        functions={() => dispatch(increment())}
        label={'inc'}
      />

      <Button
        functions={() => dispatch(decrement())}
        label={'dec'}
      />
    </>
  );
};