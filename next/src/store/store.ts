import { configureStore } from "@reduxjs/toolkit";
import AuhtReducer from "../store/reducers/AuthSlice";
import ProductsReducer from "../store/reducers/ProductsSlice";

const store = configureStore({
  reducer: {
    auth: AuhtReducer,
    products: ProductsReducer,
  },
});

// Выводим тип корневого состояния
export type RootState = ReturnType<typeof store.getState>;

// Выводим тип dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
