import React from "react";
import Users from "../components/Users";
import { connect } from "react-redux";
import { getUsers } from "../modules/users";
import { Preloader } from "../lib/20.4.3-1(PreloadContext)";

const { useEffect } = React;

const UsersContainer = ({ users, getUsers }) => {
  useEffect(() => {
    if (users) return;
    getUsers();
  }, [getUsers, users]);

  return (
    <>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </>
  );
};

export default connect(
  (state) => ({
    users: state.users.users,
  }),
  {
    getUsers,
  }
)(UsersContainer);
