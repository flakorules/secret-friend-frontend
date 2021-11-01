import React from "react";
import { useSelector } from "react-redux";
import { AddFriendForm } from "./AddFriendForm";
import { FriendsList } from "./FriendsList";
import { Navbar } from "./Navbar";
import { SecretFriendsList } from "./SecretFriendsList";

export const SecretFriendApp = () => {
  const {
    friendsListVisibility,
    secretFriendsVisibility,
    addFriendFormVisibility,
  } = useSelector((state) => state.secretFriends);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row my-3">
          {addFriendFormVisibility && <AddFriendForm />}
        </div>
        <div className="row">
          {friendsListVisibility && (
            <div className="col">
              <h2>Lista de amigos</h2>
              <FriendsList />
            </div>
          )}
          {secretFriendsVisibility && (
            <div className="col">
              <h2>Amigos secretos</h2>
              <SecretFriendsList />
            </div>
          )}
        </div>
        <div className="row"></div>
      </div>
    </>
  );
};
