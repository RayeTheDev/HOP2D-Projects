const { Schema, Types, model } = require("mongoose");

const songSchema = new Schema({
  name:  String,
  artist: String,
  duration: Number,
  url: String,
  createdAt: { type: Date, default: Date.now(), required: true },
  playlistId: Types.ObjectId
});

const Song = model("Song", songSchema);

exports.Song = Song;
