import { combineReducers } from "redux";
import { secretFriendsReducer } from "./secretFriendsReducer";

export const rootReducer = combineReducers({
  secretFriends: secretFriendsReducer, 
});