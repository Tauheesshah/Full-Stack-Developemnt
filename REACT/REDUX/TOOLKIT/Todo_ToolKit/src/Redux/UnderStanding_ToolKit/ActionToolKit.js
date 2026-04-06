import { createAction  } from "@reduxjs/toolkit";

export const increment = createAction('count/increment');
export const decrement = createAction('count/decrement');