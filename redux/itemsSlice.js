import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { domain } from "../api";



export const listItemSku = createAsyncThunk(
    "/item/sku/list", 
    async () => {
  try {
    const res = await axios.get(`${domain}/api/items/sku/list`);
    return res.data
  } catch (error) {
    return {
      error: error.response.data.error
    };
  }
});



export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    assemblyNumbers: [],
    itemNumbers: [],
    error: "",
    loading: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = ""
    },
  },
  extraReducers: {

    [listItemSku.pending]: (state) => {
      state.loading = true;
    },
    [listItemSku.fulfilled]: (state, action) => {
      state.loading = false;
      const { error, itemNumbers, assemblyNumbers } = action.payload;
      if (error) {
        state.error = error;
      } 
      else {
        state.itemNumbers = itemNumbers;
        state.assemblyNumbers = assemblyNumbers;
      }
    },
    [listItemSku.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { clearError } = itemsSlice.actions;
export const itemsState = (state) => state.items;
export default itemsSlice.reducer;
