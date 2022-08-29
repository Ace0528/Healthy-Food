import React, { createContext, useReducer, useState } from "react";
import { UPDATE_USER, SING_OUT } from "./constants";

const INIT_DATA = {
  appUser: null,
  backendUsers: [
    {
      email: "user@user.com",
      password: "user123",
      name: "User",
    },
  ],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return { ...state, appUser: { ...payload } };
    case SING_OUT:
      return { ...state, appUser: null };
    default:
      return state;
  }
};

export const AppContext = createContext(INIT_DATA);
export const AppContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, INIT_DATA);
  return (
    <AppContext.Provider
      value={{
        ...data,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
