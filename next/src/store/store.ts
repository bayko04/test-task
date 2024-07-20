import { configureStore } from "@reduxjs/toolkit";
import AuhtReducer from "../store/reducers/AuthSlice";
import ProductsReducer from "../store/reducers/ProductsSlice";

const store = configureStore({
  reducer: {
    auth: AuhtReducer,
    products: ProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
