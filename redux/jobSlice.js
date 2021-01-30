import axios from "axios";
import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import {
  domain
} from "../api";



export const createJob = createAsyncThunk(
  "/job/create",
  async (_, thunkApi) => {
    try {
      const res = await axios.post(`${domain}/api/jobs`, {
        ...thunkApi.getState().job.job
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
  PO: "",
  date: "",
  notes: "",
  items: [],
  storeNumber: "",
}

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    success: false,
    message: "",
    job: jobInitState,
    error: "",
    loading: false,
  },
  reducers: {
    addInfo: (state, action) => {
      state.job = {
        ...state.job,
        ...action.payload
      }
    },
    addItems: (state, action) => {
      state.job.items = [...state.job.items, action.payload]
    },
    clearError: (state) => {
      state.error = ""
    },
    clearJob: (state) => {
      state.job = jobInitState
      state.success = false,
        state.message = ""
    },
  },
  extraReducers: {

    [createJob.pending]: (state) => {
      state.loading = true;
    },
    [createJob.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        error,
        success,
        message
      } = action.payload;
      if (error) {
        state.error = error;
      } else {
        state.success = success
        state.message = message
        state.job = jobInitState;
      }
    },
    [createJob.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const {
  addItems,
  addInfo,
  clearError,
  clearJob,
} = jobSlice.actions;
export const jobState = (state) => state.job;
export default jobSlice.reducer;