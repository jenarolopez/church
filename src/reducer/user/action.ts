// actions.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../request/request";

// Define an async thunk for fetching data
export const signIn = createAsyncThunk(
  "user/SIGN_IN",
  async (payload: any, thunkAPI) => {
    try {
      const response = await publicRequest.signIn(payload);
      return response.data;
     
    } catch (error: any) {
      const response = error?.response?.data
        ? error?.response?.data
        : { error: "Network Error", message: "Network Error" };
      return thunkAPI.rejectWithValue(response);
    }
  }
);
