const { Schema, Types, model } = require("mongoose");

const songSchema = new Schema({
  name: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  artist: { type: Schema.Types.ObjectId, ref: "Artist" },
  duration: Number,
  url: String,
  createdAt: { type: Date, default: Date.now() },
});

const Song = model("Song", songSchema);

exports.Song = Song;