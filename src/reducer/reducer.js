import { combineReducers } from "redux";
import memberSlice from "./member/memberSlice";
import membersSlice from "./member/membersSlice";
import loadingReducer from "./loading/loadingSlice";
import settingsSlice from "./settings/settingsSlice";
import userSlice from "./user/userSlice";


const memberReducer = combineReducers({
  member: memberSlice,
  members: membersSlice,
});

export { memberReducer, loadingReducer, settingsSlice, userSlice };
