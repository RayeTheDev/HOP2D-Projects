const { Playlist } = require("../models/playlistModels");
const { Song } = require("../models/songModel");

exports.createPlaylist = async (req, res) => {
  const body = req.body;
  console.log(body);
  const result = await new Playlist(body).save();
  res.send(result);
};

exports.getPlaylists = async (req, res) => {
  const result = await Playlist.find({});
  res.send(result);
};

exports.getPlaylist = async (req, res) => {
  const result = await Playlist.findById(req.params.id).populate("songs");
  res.send(result);
};
exports.deletePlaylist = async (req, res) => {
  const id = req.params.id;
  await Playlist.deleteOne({ _id: id });
  res.send("Deleted");
};
exports.addToPlaylist = async (req, res) => {
  const playlistId = req.params.id;
  const songId = req.body.id;

  const playlist = await Playlist.findById(playlistId);
  playlist.songs.push(songId);
  await playlist.save();
  res.send(playlist);
};
