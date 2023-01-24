import axios from "axios";


export const client = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    "Content-Type": "application/json",
  },
});

console.log(localStorage.getItem("token"))
export const reqInstance = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  }
})                        