import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMember } from './action';
import { IMember } from '../../Interface'; // Assuming IMember is imported from the correct path
import { IRootReducer } from '../IReducer';

interface MemberState {
  data: IMember;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MemberState = {
  data: {} as IMember, // Assuming IMember is defined as an interface or type
  status: 'idle',
  error: null,
};

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMember.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMember.fulfilled, (state, action: PayloadAction<{ member: IMember }>) => {
        const { member } = action.payload;
        state.status = 'succeeded';
        state.data = member;
      })
      .addCase(fetchMember.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const getMember = (state: IRootReducer) => state.member.member;

export default memberSlice.reducer;
