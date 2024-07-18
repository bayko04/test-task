import AuthService from "@/services/AuthService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";

export interface IProducts {
  tablet: boolean;
  createModal: boolean;
}

const initialState: IProducts = {
  //   data: "",
  //   isLoading: false,
  //   error: "",
  //   isAuth: false,
  //   isAuthProcessing: false,
  tablet: true,
  createModal: false,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setTablet: (state, action) => {
      state.tablet = action.payload;
    },
    openCreateModal: (state, action) => {
      state.createModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { setTablet, openCreateModal } = ProductsSlice.actions;
export default ProductsSlice.reducer;
