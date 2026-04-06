
import { createSlice, nanoid } from '@reduxjs/toolkit';

const TodoSlicer = createSlice({
  name: 'todo',
  initialState: { todo: [], isLoading: false, isError: false },
  reducers: {
    addTodo: (state, { payload }) => {
      const todo = {
        id: nanoid(),
        text: payload,
        isEdits: false,
        isComplete: false,
      };
      state.todo.push(todo);
    },
    deleteTodo: (state, { payload }) => {
      state.todo.splice(
        state.todo.findIndex((el) => el.id === payload.id)
      );
    },
  },
});


export const { addTodo, deleteTodo } = TodoSlicer.actions;
export const TodoReducer = TodoSlicer.reducer;
