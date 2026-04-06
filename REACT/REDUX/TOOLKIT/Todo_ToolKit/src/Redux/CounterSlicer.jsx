import { createSlice } from '@reduxjs/toolkit';

export const counterSlicer = createSlice({
  name: 'couter',
  initialState: { count: 0 },
  reducers: {
    increment: (oldState) => {
      oldState.count = oldState.count + 1;
    },
    decrement: (oldState) => {
      oldState.count = oldState.count - 1;
    },
  },
});

export const { increment, decrement } = counterSlicer.actions;