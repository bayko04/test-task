import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "@/services/AuthService";

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

export const checkMe = createAsyncThunk(
  "auth/checkMe",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.checkMe();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
