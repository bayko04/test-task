import AuthService from "@/services/AuthService";
import ProductsService from "@/services/ProductsService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunks
export const getAllProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ProductsService.getAllProducts();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (
    { name, quantity, price, image, manufacturerId }: any,
    { rejectWithValue }
  ) => {
    try {
      const response = await ProductsService.createProduct(
        name,
        quantity,
        price,
        image[0],
        manufacturerId
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const updateProductTh = createAsyncThunk(
  "products/updateProduct",
  async (
    { name, quantity, price, image, manufacturerId, id }: any,
    { rejectWithValue }
  ) => {
    try {
      const response = await ProductsService.updateProduct(
        name,
        quantity,
        price,
        image[0],
        manufacturerId,
        id
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async ({ id }: any, { rejectWithValue }) => {
    try {
      const response = await ProductsService.deleteProduct(id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await ProductsService.searchProducts(name);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// State Interface
export interface IProducts {
  isLoading: boolean;
  tablet: boolean;
  createModal: boolean;
  changeModal: boolean;
  continueDelete: boolean;
  deleteModal: boolean;
  products: any;
  error: any;
  createProductData: any;
  deleteProductMess: any;
  deletingId: number | null;
  changingData: any;
  data: any;
}

// Initial State
const initialState: IProducts = {
  isLoading: false,
  error: null,
  products: null,
  tablet: true,
  createModal: false,
  changeModal: false,
  deleteModal: false,
  continueDelete: false,
  createProductData: "",
  deleteProductMess: "",
  deletingId: null,
  changingData: {},
  data: null,
};

// Slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setTablet: (state, action) => {
      state.tablet = action.payload;
    },
    setCreateModal: (state, action) => {
      state.createModal = action.payload;
    },
    setChangeModal: (state, action) => {
      state.changeModal = action.payload;
    },
    setContinueDelete: (state, action) => {
      state.continueDelete = action.payload;
    },
    setDeleteModal: (state, action) => {
      state.deleteModal = action.payload;
    },
    setDeletingId: (state, action) => {
      state.deletingId = action.payload;
    },
    setChangingData: (state, action) => {
      state.changingData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // getAllProducts
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // createProduct
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createProductData = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // update
      .addCase(updateProductTh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductTh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateProductTh.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // deleteProduct
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteProductMess = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // searchsProduct
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Actions & Reducer
export const {
  setTablet,
  setCreateModal,
  setChangeModal,
  setDeleteModal,
  setContinueDelete,
  setDeletingId,
  setChangingData,
} = productsSlice.actions;

export default productsSlice.reducer;
