import { createSlice } from "@reduxjs/toolkit";

const storedAuth = localStorage.getItem("adminAuthenticated") === "true";

const initialState = {
  isAuthenticated: storedAuth,
  email: storedAuth ? localStorage.getItem("adminEmail") : null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;

      localStorage.setItem("adminAuthenticated", "true");
      localStorage.setItem("adminEmail", action.payload.email);
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.email = null;

      localStorage.removeItem("adminAuthenticated");
      localStorage.removeItem("adminEmail");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
