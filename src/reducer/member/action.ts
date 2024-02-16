// actions.js

import { createAsyncThunk } from "@reduxjs/toolkit";

import { userRequest } from "../../request/request";
import { objectToQueryString } from "../../utils/helper";
import { DispatchProp } from "react-redux";

// Define an async thunk for fetching data
export const fetchMembers = createAsyncThunk(
  "member/MEMBER_LIST",
  async (payload: any, thunkAPI) => {
    try {
      const queryParams = objectToQueryString(payload);
      const response = await userRequest.getAllUsers(queryParams);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchMember = createAsyncThunk(
  "member/MEMBER_DATA",
  async (payload: any) => {
    try {
      const response = await userRequest.getUser(payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
