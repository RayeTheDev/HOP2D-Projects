// import { JsonWebTokenError } from "jsonwebtoken";
import { createContext, useContext, useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import axios from "axios";
import { client } from "../Client/useInstance";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  const [user, setUser] = useState()


  useEffect(() => {
    if (token) {

      axios.post('http://localhost:9000/user', {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }) .then((response) => {
        // console.log(response.data)
        client.get('/user/' + response.data._id)
          .then((response) => {
            setUser(response.data)
          })
          .catch((error) => {
            console.log(error)
          });
      }).catch((error) => {
        console.log(error)
      })
       
    
    }
  }, [token]);


  const value = {
    currentUser,
    setCurrentUser,
    token,
    setToken,
    user,
    setUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
