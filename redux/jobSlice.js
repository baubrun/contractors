import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { domain } from "../api";



export const createJob = createAsyncThunk(
    "/job/create", 
    async ( _ ,thunkApi) => {
  try {
    const res = await axios.post(`${domain}/api/job`,
    {
      job: thunkApi.getState().job
    });
    return res.data
  } catch (error) {
    return {
      error: error.response.data.error
    };
  }
});

const jobInitState = {
  firstName: "",
  lastName: "",
  itemDescription: "",
  PO: "",
  qty: "",  
  assemblySku: "",
  itemSku: "",
  storeNumber: "",
  date: "",
  items: [],

}

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    confirmation: "",
    job: jobInitState,
    error: "",
    loading: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.job = {...state.job, items: [...state.job.items, action.payload]}
    },
    clearError: (state) => {
      state.error = ""
    },
    clearJob: (state) => {
      state.job = jobInitState
    },
  },
  extraReducers: {

    [createJob.pending]: (state) => {
      state.loading = true;
    },
    [createJob.fulfilled]: (state, action) => {
      state.loading = false;
      const { error } = action.payload;
      if (error) {
        state.error = error;
      } 
      else {
        state.job = jobInitState;
      }
    },
    [createJob.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    
   
  },
});

export const { addItem, clearError, clearJob } = jobSlice.actions;
export const jobState = (state) => state.job;
export default jobSlice.reducer;
