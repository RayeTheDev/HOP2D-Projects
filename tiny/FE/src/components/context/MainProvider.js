import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [user, setUser] = useState();
  const {currentUser} = useContext(AuthContext)

  console.log(currentUser)

  useEffect(() => {
    if(currentUser)
    axios.get('http://localhost:9000/user/' + currentUser)
    .then((res) => {
      setUser(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [currentUser])


  const value = {
    user,
    setUser,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
