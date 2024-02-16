import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loading: false,
    percentage: 0,
    text: "",
    icon: ""
  },
  reducers: {
    setLoading(state, action){
      state.loading = action.payload.loading
      state.text = action.payload.text
      state.icon = action.payload.icon
    }
  },
})

export const getLoading = state => state.loading


export default loadingSlice.reducer;
export const { setLoading } = loadingSlice.actions