const express = require("express"),
  cors = require("cors");
const { createPlaylist, getPlaylists, addToPlaylist, getPlaylist } = require("../controller/playlistController");
const router = express.Router();
const { check, validationResult } = require("express-validator");


router
  .post("/playlists", createPlaylist)
  .get("/playlists", getPlaylists)
  .get("/playlist/:id", getPlaylist)
  .put("/playlist/:id", addToPlaylist)
  .delete("/playlist/:id", () => {})

exports.playlistRoutes = router;
