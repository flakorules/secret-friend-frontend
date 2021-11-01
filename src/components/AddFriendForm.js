import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addFriend } from "../actions/secretFriends.action";

export const AddFriendForm = () => {
  const dispatch = useDispatch();
  const { friendsList } = useSelector((state) => state.secretFriends);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name }) => {
    dispatch(addFriend(name));
  };

  return (
    <>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} className="animate__animated animate__fadeInDown">
        <div className="row my-3">
          <div className="col">
            <input
              type="text"
              placeholder="Nombre"
              className="form-control"
              {...register("name", {
                required: true,
                validate: (value) => !friendsList.includes(value),
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <div className="alert alert-danger p-1 mt-2" role="alert">
                Name is required
              </div>
            )}

            {errors.name && errors.name.type === "validate" && (
              <div className="alert alert-danger p-1 mt-2" role="alert">
                Name is already included on the list
              </div>
            )}
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">
              Agregar
            </button>
          </div>
        </div>
      </form>
      <hr />
    </>
  );
};
