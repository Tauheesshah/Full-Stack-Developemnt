import { createSlice } from "@reduxjs/toolkit";

// safer parsing
const getUserFromStorage = () => {
  try {
    const data = localStorage.getItem("userInfo");
    return data ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
};

const initialState = {
  user: getUserFromStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;

      // store safely
      localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload)
      );
    },

    logout: (state) => {
      state.user = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;