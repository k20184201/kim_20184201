import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/20.4.7-1(User)";
import { usePreloader } from "../lib/20.4.9-1(PreloadContext)";
import { getUser } from "../modules/20.4.6-1(users)";

const UserContainer = ({ id }) => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUser(id)));

  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return;

    dispatch(getUser(id));
  }, [dispatch, id, user]);

  if (!user) return null;
  return <User user={user} />;
};

export default UserContainer;
