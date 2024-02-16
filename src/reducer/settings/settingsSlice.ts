import { createSlice } from "@reduxjs/toolkit";
import { IRootReducer } from "../IReducer";
import { setTableLimit } from "./action";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    table: {
      limit: 20,
    },
  },
  reducers:{

  },
  extraReducers: (builder) => {
    builder
      .addCase(setTableLimit.fulfilled, (state, action) => {
        state.table.limit = action.payload;
      })
  },
});

export const getTableLimit = (state: IRootReducer) => state.settings.table.limit;

export default settingsSlice.reducer;
