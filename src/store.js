import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { memberReducer, loadingReducer, settingsSlice } from "./reducer/reducer";


export default configureStore({
  reducer: {
    member: memberReducer,
    loading: loadingReducer,
    settings: settingsSlice
  },
});
