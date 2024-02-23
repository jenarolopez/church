// actions.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../request/request";
import Cookies from "js-cookie";
import { setLoading } from "../loading/loadingSlice";

// Define an async thunk for fetching data
export const signIn = createAsyncThunk(
  "user/SIGN_IN",
  async (payload: any, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        setLoading({
          loading: true,
          text: "Signing in",
          icon: "loading",
        })
      );
      const response = await publicRequest.signIn(payload);
      Cookies.set("token", response.data.data.token, {
        expires: 24,
        sameSite: "Strict",
      });

      setTimeout(() => {
        thunkAPI.dispatch(
          setLoading({
            loading: false,
            text: "Signing in",
            icon: "loading",
          })
        );
        window.location.assign("/admin/members");
      }, 2500);

      return response.data;
    } catch (error: any) {
      const response = error?.response?.data
        ? error?.response?.data
        : { error: "Network Error", message: "Network Error" };
      setTimeout(() => {
        thunkAPI.dispatch(
          setLoading({
            loading: false,
            text: "Signing in",
            icon: "loading",
          })
        );
      }, 2000);
      return thunkAPI.rejectWithValue(response);
    }
  }
);
