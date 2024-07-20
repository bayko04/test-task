import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import { login, checkMe } from "../features/AuthThunk";

const initialState: any = {
  data: "",
  user: {
    roles: [],
    user: {
      name: "",
    },
  },
  isLoading: false,
  error: "",
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
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
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