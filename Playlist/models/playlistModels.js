const { Schema, Types, model } = require("mongoose");

const playlistSchema = new Schema({
  title: { type: String, required: true },
  // songs:
  description: String,
  creatorId: Types.ObjectId,
  createdAt: { type: Date, default: Date.now(), required: true },
  updateAt: { type: Date, default: Date.now(), required: true },
  isPrivate: { type: Boolean,default: false, required: true },
});

const Playlist = model("Playlist", playlistSchema);

exports.Playlist = Playlist;
