const { Schema, Types, model } = require("mongoose");

const userSchema = new Schema({
  username: {type: String, required: true},  
  // fbId: { type: Schema.Types.ObjectId, required: true },
  password: {type: String, required: true},
  createdAt: { type: Date, default: Date.now() },
});

const User = model("User", userSchema);

exports.User = User;
