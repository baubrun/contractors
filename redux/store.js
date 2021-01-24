import { configureStore } from '@reduxjs/toolkit';
import ratesReducer from "./ratesSlice";
import storesReducer from "./storeSlice";
import jobReducer from "./jobSlice";

export default configureStore({
  reducer: {
    job: jobReducer,
    rates: ratesReducer,
    stores: storesReducer,
  },
  
});
