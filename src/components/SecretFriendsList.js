import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddFriendFormVisibility,
  setFriendsListVisibility,
  setSecretFriendsVisibility,
} from "../actions/secretFriends.action";

export const SecretFriendsList = () => {
  const { secretFriends } = useSelector((state) => state.secretFriends);
  const dispatch = useDispatch();

  const ent = Object.entries(secretFriends);

  const onHandleVolverClick = () => {
    dispatch(setFriendsListVisibility(true));
    dispatch(setSecretFriendsVisibility(false));
    dispatch(setAddFriendFormVisibility(true));
  };

  return (
    <>
      <ul className="list-group animate__animated animate__fadeInLeft">
        {ent.map(([k, v]) => (
          <li key={k} className="list-group-item">
            {k}

            <div className="alert alert-info float-end p-1 w-50" role="alert">
              {v}
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={onHandleVolverClick}>
        Volver
      </button>
    </>
  );
};
