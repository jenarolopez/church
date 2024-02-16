import { createSlice } from "@reduxjs/toolkit";
import { fetchMembers } from "./action";
import { IMembersSlice, IRootReducer } from "../IReducer";



const initialState: IMembersSlice = {
  list: [],
  hasNextPage: false,
  hasPrevPage: false,
  totalPages: 0,
  totalCount: 0,
  currentPage: 1,
  status: "idle",
  error: null,
};

export const membersSlice = createSlice({
  name: "members",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload.list;
        state.hasNextPage = action.payload.hasNextPage;
        state.hasPrevPage = action.payload.hasPrevPage;
        state.totalPages = action.payload.totalPages;
        state.totalCount = action.payload.totalCount;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.status = "failed";
        state.error = `${action.error.message}`;
      });
  },
});

export const getMembers = (state: IRootReducer) => state.member.members;

export default membersSlice.reducer;
