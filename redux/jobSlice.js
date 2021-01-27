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
  items: [],
}

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    success: false,
    job: jobInitState,
    error: "",
    loading: false,
  },
  reducers: {
    addItems: (state, action) => {
      state.job = {
        date: action.payload.date,
        ...action.payload.jobInfo,
        items: [...state.job.items, action.payload.items]
      }
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

export const { clearError, clearJob, addItems, addJob } = jobSlice.actions;
export const jobState = (state) => state.job;
export default jobSlice.reducer;
