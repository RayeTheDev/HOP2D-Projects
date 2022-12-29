const { User} = require("../models/userModel");


exports.createUser = async (req, res) => {
  const body = req.body;
  const result = await new User(body).save();
  res.send(result);
};

exports.getUsers = async (req, res) => {
  const result = await User.find({});
  res.send(result);
};
exports.loginUser = async (req, res) => {
  const {username, password} = req.body
  const user = await User.findOne({username})
  console.log(user)

  if(user.password === password) {
    res.send(user)
  } else {
    res.status(401).json({"message": "Invalid password"})
  }
}
exports.getUser = async (req, res) => { 
  const id = req.params.id;
  const result = await User.findById({ _id: id });
  res.send(result);
};
  