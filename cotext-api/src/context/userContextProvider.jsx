import React from "react";
import UserContext from "./userContext";
import Login from "../components/Login";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
      {/* <Login /> */}
      {/* <Profiles /> */}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
