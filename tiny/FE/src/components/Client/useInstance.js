import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


export const client = axios.create({
  baseURL: "https://boginoo-bjhp.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});




export const useInstance = () => {
  {



    // console.log(token)
    // axios.create({
    //   baseURL: "http://localhost:9000",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   }
    // })                                

  }
}