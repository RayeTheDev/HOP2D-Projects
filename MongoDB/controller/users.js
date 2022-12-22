const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");
const User = mongoose.model("User", { email: String, password: String });

exports.getUser = async (req, res) => {
  const data = await User.find({});
  res.send(data);
};
exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const body = req.body;
  const clerk = new User(body);
  await clerk.save();
  res.send("Success");
};
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(
    id,
    { name: "nohoin gulug" },
    { new: true }
  );
  console.log(user);
  res.send(user);
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.deleteOne({ _id: id });
  res.send("Deleted");
};
