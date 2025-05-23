import React from "react";
import UserContext from "../context/userContext";
import { useContext } from "react";

function Profiles() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Login Please!</div>;
  return <div>Welcome {user.username}</div>;
}

export default Profiles;
