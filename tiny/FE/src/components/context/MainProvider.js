import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isHistory, setIsHistory] = useState(false);
  const { currentUser } = useContext(AuthContext)


  // useEffect(() => {
  //   if(currentUser)
  //   axios.get('http://localhost:9000/user/' + currentUser)
  //   .then((res) => {
  //     setUser(res.data)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }, [currentUser])


  const value = {
    user,
    setUser,
    isHistory,
    setIsHistory
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
