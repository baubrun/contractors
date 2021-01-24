import { configureStore } from '@reduxjs/toolkit';
import ratesReducer from "./ratesSlice";
import storesReducer from "./storeSlice";

export default configureStore({
  reducer: {
    rates: ratesReducer,
    stores: storesReducer,
  },
  
});
