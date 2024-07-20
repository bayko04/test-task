import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getManufacturers,
  getLimitProducts,
  createProduct,
  updateProductTh,
  deleteProduct,
  searchProducts,
} from "../features/ProductsThunk";
import { IProductsSlice } from "@/types/IProductsSlice";

const initialState: IProductsSlice = {
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
  changed: false,
  pageSw: 1,
};

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
    setCreated: (state, action) => {
      state.created = action.payload;
    },
    setChanged: (state, action) => {
      state.changed = action.payload;
    },
    setPageSw: (state, action) => {
      state.pageSw = action.payload;
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
  setChanged,
  setPageSw,
} = productsSlice.actions;

export default productsSlice.reducer;
