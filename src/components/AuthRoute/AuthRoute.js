import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContextProvider";

export const AuthRoute = ({ children }) => {
  const { appUser } = useContext(AppContext);
  return <>{appUser ? children : <Navigate to="/login" />} </>;
};
