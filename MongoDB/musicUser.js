const express = require("express"),
  cors = require("cors");
const app = express();
const connect = require("./helper/db");
const router = express.Router();

app.use(cors());
app.use(express.json());
connect();

app.get("/", (req, res) => {
  res.send("Hello MongoDB!");
});

app.use(require('./Routes/login'))
app.listen(8000, () => {
  console.log("listen at: ", 8000);
});


