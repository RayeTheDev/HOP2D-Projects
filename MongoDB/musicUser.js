const express = require("express"),
  cors = require("cors");
const app = express();
const connect = require("./helper/db");
const router = express.Router();

app.use(cors());
app.use(express.json());
//Connecting My MongoDB
connect();

app.get("/", (req, res) => {
  res.send("Hello MongoDB!");
});

//Connecting Login Route
app.use(require('./Routes/login'))

app.listen(8001, () => {
  console.log("listen at: ", 8001);
});


  