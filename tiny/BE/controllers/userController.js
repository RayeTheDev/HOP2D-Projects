const { User } = require("../models/userModels");
const jwt = require("jsonwebtoken");
require("dotenv").config();



exports.createUser = async (req, res) => {
  const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.status(201).json(user);
};

exports.getUsers = async (req, res) => {
  const result = await User.find({});
  res.send(result);
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
    const user = await User.findOne({ email})
  const accessToken = jwt.sign(
    { email: email, password: password },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ accessToken: accessToken });
};

exports.getAuthToken = async (req, res) => {
//   res.json(posts.filter((post) => (post.email = req.user.email)));
console.log("get auth token")
res.send("User Exists");
};

exports.getUser = async (req, res) => {
  const id = req.params.id;
  const result = await User.findById({ _id: id });
  res.send(result);


};
