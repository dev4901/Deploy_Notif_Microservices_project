import React, { useState, useContext, createContext } from "react";

const AUthContext = createContext(null);

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("logining")
  );
  const login = (isLoggedIn) => {
    setIsLoggedIn(true);
    window.localStorage.setItem("logining", true);
  };
  const logout = () => {
    setIsLoggedIn(false);
    window.localStorage.setItem("logining", false);
  };
  return (
    <AUthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AUthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(AUthContext);
};
