import React from "react";
import { useDispatch } from "react-redux";
import { deleteFriend } from "../actions/secretFriends.action";

export const FriendsListElement = ({ name }) => {
  const dispatch = useDispatch();

  const onHandleDeleteClick = () => {
    dispatch(deleteFriend(name));
  };

  return (
    <li className="list-group-item animate__animated animate__fadeInLeft">
      {name}
      <button
        className="btn btn-danger float-end"
        onClick={onHandleDeleteClick}
      >
        Eliminar
      </button>
    </li>
  );
};
