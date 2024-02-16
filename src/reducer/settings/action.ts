// actions.js

import { createAsyncThunk } from "@reduxjs/toolkit";

import { userRequest } from "../../request/request";
import { objectToQueryString } from "../../utils/helper";
import { DispatchProp } from "react-redux";
import { fetchMembers } from "../member/action";

// Define an async thunk for fetching data
export const setTableLimit = createAsyncThunk(
  "settings/setTableLimit",
  async (payload: any, thunkAPI: any) => {
    try {
      thunkAPI.dispatch(fetchMembers({ limit: payload, page: 1 }));
      return payload
    } catch (error) {
      throw error;
    }
  }
);

