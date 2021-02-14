import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { RiAdminLine } from "react-icons/ri";

const AdminLogin = ({
  username,
  password,
  isLoggedIn,
  setIsLoggedIn,
  setUserName,
  setPassword,
}) => {
  let { data } = useContext(DataContext);

  const onSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (
      username === data.userAuth.username &&
      password === data.userAuth.password
    ) {
      setIsLoggedIn(true);
    } else {
      if (e) {
        alert("Authentication error occured");
      }
      setPassword("");
      setUserName("");
    }
  };

  useEffect(onSubmit, []);

  if (isLoggedIn) return <></>;
  return (
    <form className="logInForm" onSubmit={onSubmit}>
      <fieldset>
        <h1 className="adminLogin">
          <RiAdminLine /> Admin Login
        </h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="username"
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" className="submitBtn" />
      </fieldset>
    </form>
  );
};

export default AdminLogin;
