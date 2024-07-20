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
export const getManufacturers = createAsyncThunk(
  "products/getManufacturers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ProductsService.getManufacturers();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const getLimitProducts = createAsyncThunk(
  "products/getLimitProducts",
  async ({ page }: any, { rejectWithValue }) => {
    try {
      const response = await ProductsService.getLimitProducts(page);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data: any, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(data)) {
        if (key === "image") {
          formData.append("image", data.image[0]);
        } else {
          formData.append(key, String(value));
        }
      }

      const response = await ProductsService.createProduct(formData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const updateProductTh = createAsyncThunk(
  "products/updateProduct",
  async ({ updatedData, id }: any, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      for (const [key, value] of Object.entries(updatedData)) {
        if (key === "image") {
          if (value instanceof File) {
            formData.append("image", value);
          } else {
            console.warn(`Unexpected type for image field. Skipping.`);
          }
        } else {
          formData.append(key, String(value));
        }
      }

      console.log(updatedData);
      const response = await ProductsService.updateProduct(formData, id);
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
  productsLimit: any;
  error: any;
  createProductData: any;
  deleteProductMess: any;
  deletingId: number;
  changingData: any;
  deletingData: any;
  data: any;
  manufacturers: any;
  created: boolean;
}

// Initial State
const initialState: IProducts = {
  isLoading: false,
  error: null,
  products: [],
  productsLimit: [],
  tablet: true,
  createModal: false,
  changeModal: false,
  deleteModal: false,
  continueDelete: false,
  createProductData: "",
  deleteProductMess: "",
  deletingId: 0,
  changingData: {},
  deletingData: {},
  data: null,
  manufacturers: [],
  created: false,
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
    setDeletingData: (state, action) => {
      state.deletingData = action.payload;
    },
    setCreated: (state) => {
      state.created = false;
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
      // getLimitProducts
      .addCase(getLimitProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLimitProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsLimit = action.payload;
      })
      .addCase(getLimitProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // getLimitProducts
      .addCase(getManufacturers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getManufacturers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.manufacturers = action.payload;
      })
      .addCase(getManufacturers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // createProduct
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.created = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createProductData = action.payload;
        state.created = true;
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
        state.productsLimit = action.payload;
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
  setCreated,
  setDeletingData,
} = productsSlice.actions;

export default productsSlice.reducer;
