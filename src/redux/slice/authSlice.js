import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
      localStorage.setItem("token", null);
    },
  },
});

export const { addUser, logOut } = authSlice.actions;

export default authSlice.reducer;
