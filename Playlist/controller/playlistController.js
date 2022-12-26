const { Playlist } = require("../models/playlistModels");
const { Song } = require("../models/songModel");

exports.createPlaylist = async (req, res) => {
  const body = req.body;
  console.log(body)
  const result = await new Playlist(body).save();
  res.send(result);
};

exports.getPlaylists = async (req, res) => {
  const result = await Playlist.find({});
  res.send(result);
};

exports.getPlaylist = async (req, res) => {
  const result = await Playlist.findById(req.params.id).populate('songs')
  res.send(result)
}

