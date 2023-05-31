import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


export const client = axios.create({
  baseURL: "https://boginoo-bjhp.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});



<<<<<<< HEAD

=======
>>>>>>> 4912b11904949ae00196523e43a0a86a9ab6dec7
