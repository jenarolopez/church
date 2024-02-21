import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signIn } from "./action";
import { IMember } from "../../Interface"; // Assuming IMember is imported from the correct path
import { IRootReducer, IUser } from "../IReducer";

interface UserState {
  username: String;
  email: String;
  role: String;
  firstName: String;
  lastName: String;
  id: number;
}

const initialState: IUser = {
  data: {
    username: "",
    email: "",
    role: "",
    firstName: "",
    lastName: "",
    id: 0,
  },
  status: "idle",
  error: "",
  message: "",
  token: "",
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        signIn.fulfilled,
        (
          state,
          action: PayloadAction<{
            data: { user: IUser["data"]; token: string };
          }>
        ) => {
          console.log(action.payload, "123");

          console.log(action.payload);
          state.status = "succeeded";
          state.data = action.payload.data.user;
          state.token = action.payload.data.token;
          state.error = "";
          state.message = "";
        }
      )
      .addCase(signIn.rejected, (state, action) => {
        const { error, message } = action.payload as {
          error: string;
          message: string;
        };
        state.status = "failed";
        state.error = error;
        state.message = message;
        state.data = initialState.data;
      });
  },
});

export const getUser = (state: IRootReducer) => state.user;

export default memberSlice.reducer;
