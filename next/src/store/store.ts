import { configureStore } from "@reduxjs/toolkit";
import AuhtReducer from "../store/reducers/AuthSlice";
import ProductsReducer from "../store/reducers/ProductsSlice";

const store = configureStore({
  reducer: {
    auth: AuhtReducer,
    products: ProductsReducer,
  },
});

export default store;
