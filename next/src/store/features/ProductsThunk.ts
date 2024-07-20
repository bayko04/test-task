import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductsService from "@/services/ProductsService";

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
