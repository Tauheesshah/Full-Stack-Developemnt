
import { createReducer } from '@reduxjs/toolkit';
import { decrement, increment } from './ActionToolKit';

const initialValue = { count: 0 };

export const reducerToolkit = createReducer(initialValue, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.count += 1;
    })
    .addCase(decrement, (state) => {
      state.count -= 1;
    });

  // Optional example:
  // .addCase(incrementByValue, (state, { payload }) => {
  //   state.count += payload;
  // });
});
