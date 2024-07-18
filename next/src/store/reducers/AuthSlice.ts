import AuthService from "@/services/AuthService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: any, { rejectWithValue }) => {
    try {
      const response: any = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const checkAuth = createAsyncThunk(
  "auth/check",
  async (_: any, { rejectWithValue }) => {
    try {
      const response: any = await AuthService.checkAuth();
      localStorage.setItem("token", response.data.token);
      return response.data.token;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: any = {
  data: "",
  isLoading: false,
  error: "",
  isAuth: false,
  isAuthProcessing: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //checkAuth
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.payload;
      });
  },
});

export default AuthSlice.reducer;
