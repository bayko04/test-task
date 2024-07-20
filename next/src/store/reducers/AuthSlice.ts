import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import { login, checkMe } from "../features/AuthThunk";
import { IAuthSlice } from "@/types/IAuthSlice";

const initialState: IAuthSlice = {
  user: {
    roles: [],
    user: {
      name: "",
    },
  },
  isLoading: false,
  error: "",
  errorAuth: "",
  isAuth: false,
  isAuthProcessing: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder

      //login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorAuth = false;
        state.isAuth = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuth = false;
        state.isLoading = false;
        state.errorAuth = true;
      })
      //checkAuth
      .addCase(checkMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(checkMe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;
