import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { domain } from "../api";



export const listStores = createAsyncThunk(
    "/stores/list", 
    async () => {
  try {
    const res = await axios.get(`${domain}/api/stores`);
    return res.data
  } catch (error) {
    return {
      error: error.response.data.error
    };
  }
});



export const storesSlice = createSlice({
  name: "stores",
  initialState: {
    stores: [],
    error: "",
    loading: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = ""
    },
  },
  extraReducers: {

    [listStores.pending]: (state) => {
      state.loading = true;
    },
    [listStores.fulfilled]: (state, action) => {
      state.loading = false;
      const { error, stores } = action.payload;
      if (error) {
        state.error = error;
      } 
      else {
        state.stores = stores;
      }
    },
    [listStores.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    
   
  },
});

export const { clearError } = storesSlice.actions;
export const storesState = (state) => state.stores;
export default storesSlice.reducer;
