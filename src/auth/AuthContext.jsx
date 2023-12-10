import React, { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // make initila state values false to show the pages
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [previouslyRegistered, SetPreviouslyRegistered] = useState(true);

  const login = () => {
    if (previouslyRegistered === true) {
      setIsLoggedIn(true);
      <Navigate to="/" replace />;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    <Navigate to="/" replace />;
  };

  const signUp = () => {
    SetPreviouslyRegistered(true);
    <Navigate to="/signup" replace />;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, previouslyRegistered, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
