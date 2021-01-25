import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { domain } from "../api";



export const listRates = createAsyncThunk(
    "/rates/list", 
    async () => {
  try {
    const res = await axios.get(`${domain}/api/rates`);
    return res.data
  } catch (error) {
    return {
      error: error.response.data.error
    };
  }
});



export const ratesSlice = createSlice({
  name: "rates",
  initialState: {
    rates: [],
    error: "",
    loading: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = ""
    },
  },
  extraReducers: {

    [listRates.pending]: (state) => {
      state.loading = true;
    },
    [listRates.fulfilled]: (state, action) => {
      state.loading = false;
      const { error, rates } = action.payload;
      if (error) {
        state.error = error;
      } 
      else {
        state.rates = rates;
      }
    },
    [listRates.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    
   
  },
});

export const { clearError } = ratesSlice.actions;

export const ratesState = (state) => state.rates;
export default ratesSlice.reducer;
