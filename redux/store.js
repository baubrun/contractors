import { configureStore } from '@reduxjs/toolkit';
import ratesReducer from "./ratesSlice";
import storesReducer from "./storeSlice";
import jobReducer from "./jobSlice";
import itemsReducer from "./itemsSlice";

export default configureStore({
  reducer: {
    job: jobReducer,
    items: itemsReducer,
    rates: ratesReducer,
    stores: storesReducer,
  },
  
});
