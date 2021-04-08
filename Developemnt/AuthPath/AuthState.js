import React, { createContext, useState, useEffect, Children } from "react";
import App from "../../App";
import { app } from "../../base";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrent(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ current, mgs: "I am" }}>
      {children}
    </AuthContext.Provider>
  );
};
