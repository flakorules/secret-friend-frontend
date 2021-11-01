import { types } from "../types/types";

const initialState = {
  friendsList: [],
  secretFriends: null,

  friendsListVisibility: true,
  secretFriendsVisibility: false,
  addFriendFormVisibility: true,
};

export const secretFriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addFriend:
      return {
        ...state,
        friendsList: [...state.friendsList, action.payload],
      };

    case types.deleteFriend:
      return {
        ...state,
        friendsList: state.friendsList.filter(
          (friend) => friend !== action.payload
        ),
      };

    case types.setSecretFriends:
      return {
        ...state,
        secretFriends: action.payload,
      };

    case types.setFriendsListVisibility:
      return {
        ...state,
        friendsListVisibility: action.payload,
      };

    case types.setSecretFriendsVisibility:
      return {
        ...state,
        secretFriendsVisibility: action.payload,
      };

    case types.setAddFriendFormVisibility:
      return {
        ...state,
        addFriendFormVisibility: action.payload,
      };

    default:
      return state;
  }
};
