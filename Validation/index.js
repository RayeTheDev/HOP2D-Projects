const express = require("express"),cors=require('cors');
const app = express();
const { check, validationResult } = require("express-validator");

app.use(express.json(),cors());

let arr = []

app.post("/users", [check("name").isString(), check("email").isEmail()], cors(),(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()})
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

// const {body, validationResult} = require('express-validator')

// app.post(
//     '/user',
//     body('username').isEmail(),
//     body('password').isLength({min: 5}),
//     (req, res) => {
//         const errors = validationResult(req)
//         if(!errors.isEmpty()) {
//             return res.status(400).json({errors: errors.array()})
//         }
//     User.create({
//         username: req.body.username,
//         password: req.body.password,
//     }).then(user => res.json(user))

//     }

// )
