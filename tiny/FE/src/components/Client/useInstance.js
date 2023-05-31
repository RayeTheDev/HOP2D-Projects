import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


export const client = axios.create({
  baseURL: "https://boginoo-bjhp.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});




