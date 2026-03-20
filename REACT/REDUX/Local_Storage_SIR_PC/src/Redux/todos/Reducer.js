import * as types from './Action';

const initialValue = {
  todo: [],
  isError: false,
  isLoading: false,
};

export const Reducer = (oldState = initialValue, action) => {
  switch (action.type) {
    case types.ADD_TODO_ITEMS:
      return {
        ...oldState,
        todo: [
          ...oldState.todo,
          {
            id: oldState.todo.length + 1,
            ...action.payload,
          },
        ],
      };

    case types.DELETE_TODO_ITEMS:
      return oldState.filter((items) => items.id !== action.payload);

    case types.EDITS_TODO_ITEMS:
      return oldState.map((items) =>
        items.id === action.payload ? { ...items, isEdits: true } : items,
      );

    default:
      return oldState;
  }
};
