const express = require("express"), cors = require('cors');
const app = express();
const { check, validationResult } = require("express-validator");

app.use(express.json(), cors());

let arr = []

app.post("/users", [check("email").isEmail(), check("password").isLength({ min: 5 })], cors(), (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  const body = req.body
  console.log(body);
  res.send("Successfully");
  arr.push(req.body)

});
app.get("/users", (req, res) => {
  // const body = req.body
  // console.log(body)
  res.send(arr)
})
app.listen(9000, () => {
  console.log("listen at: ", 9000);
});

