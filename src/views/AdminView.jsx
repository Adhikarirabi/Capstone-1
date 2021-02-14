import React, { useState } from "react";
import AdminLogin from "../components/AdminLogin";
import useLocalStorage from "../customHooks/useLocalStorage";
import AdminList from "../components/AdminList";

const AdminView = ({ isLoggedIn, setIsLoggedIn }) => {
  const [username, setUserName] = useLocalStorage("username", "");
  const [password, setPassword] = useLocalStorage("password", "");

  return (
    <div>
      {!isLoggedIn ? (
        <AdminLogin
          username={username}
          password={password}
          isLoggedIn={isLoggedIn}
          setUserName={setUserName}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <AdminList />
      )}
    </div>
  );
};

export default AdminView;
