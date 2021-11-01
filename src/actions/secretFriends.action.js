import { fetchSecretFriendsService } from "../helpers/fetchHelper";
import { types } from "../types/types";

export const startSetSecretFriends = () => {
  return async (dispatch, getState) => {
    const { friendsList } = getState().secretFriends;

    const data = await fetchSecretFriendsService(friendsList);

    dispatch(setSecretFriends(data));

    dispatch(setFriendsListVisibility(false));
    dispatch(setSecretFriendsVisibility(true));
    dispatch(setAddFriendFormVisibility(false));
  };
};

export const addFriend = (friend) => ({
  type: types.addFriend,
  payload: friend,
});

export const deleteFriend = (friend) => ({
  type: types.deleteFriend,
  payload: friend,
});

const setSecretFriends = (secretFriends) => ({
  type: types.setSecretFriends,
  payload: secretFriends,
});

export const setFriendsListVisibility = (flag) => ({
  type: types.setFriendsListVisibility,
  payload: flag,
});

export const setSecretFriendsVisibility = (flag) => ({
  type: types.setSecretFriendsVisibility,
  payload: flag,
});

export const setAddFriendFormVisibility = (flag) => ({
  type: types.setAddFriendFormVisibility,
  payload: flag,
});
