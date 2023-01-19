import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState(window.localStorage.getItem('token'));

  useEffect(() => {
    if(token) {
      setToken(window.localStorage.getItem('token'))
    }
  }, [token]);

  const value = {
    currentUser,
    setCurrentUser,
    token, 
    setToken
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
