const { User } = require("../models/userModels");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  const isAlready = await User.findOne({ email: email });
  console.log(isAlready);

  try {
    if (isAlready !== null) {
      res.status(400).send("That email is already registered");
      return;
    }
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).send({ errors });
  }
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
//   res.send(user)
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
