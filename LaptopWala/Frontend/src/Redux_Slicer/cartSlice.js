import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    setCart: (state, action) => {
      state.items = action.payload.items || [];

      state.totalQty =
        action.payload.items?.reduce(
          (sum, item) => sum + item.quantity,
          0
        ) || 0;
    },

    addToCart: (state, action) => {
      const product = action.payload;

      const item = state.items.find(
        (i) => i.product._id === product._id
      );

      if (item) item.quantity += 1;
      else state.items.push({ product, quantity: 1 });

      state.totalQty += 1;
    },

    decreaseCart: (state, action) => {
      const id = action.payload;

      const item = state.items.find(
        (i) => i.product._id === id
      );

      if (!item) return;

      item.quantity -= 1;
      state.totalQty -= 1;

      if (item.quantity <= 0) {
        state.items = state.items.filter(
          (i) => i.product._id !== id
        );
      }
    },
  },
});

export const {
  setCart,
  addToCart,
  decreaseCart,
} = cartSlice.actions;

export default cartSlice.reducer;