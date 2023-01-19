import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    "Content-Type": "application/json",
  },
});


export let reqInstance = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    Authorization : `Bearer ${localStorage.getItem("token")}`,
    "Content-Type" : "application/json",
    }
  })