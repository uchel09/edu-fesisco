import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import globalReducer from "./slices/globalSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    global: globalReducer,
  },
});

export default store;
