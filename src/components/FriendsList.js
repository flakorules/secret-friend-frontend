import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSetSecretFriends } from "../actions/secretFriends.action";
import { FriendsListElement } from "./FriendsListElement";

export const FriendsList = () => {
  const { friendsList } = useSelector((state) => state.secretFriends);
  const dispatch = useDispatch();
  const onHandleGetSecretFriendsClick = () => {
    dispatch(startSetSecretFriends());
  };

  return (
    <>
      <ul className="list-group animate__animated animate__fadeInLeft">
        {friendsList.map((friend) => (
          <FriendsListElement key={friend} name={friend} />
        ))}
      </ul>
      {friendsList.length > 2 && (
        <button
          className="btn btn-primary mt-3"
          onClick={onHandleGetSecretFriendsClick}
        >
          Obtener amigos secretos
        </button>
      )}
    </>
  );
};
