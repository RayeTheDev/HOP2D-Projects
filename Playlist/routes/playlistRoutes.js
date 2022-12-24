const express = require("express"),
  cors = require("cors");
const { createPlaylist, getPlaylist } = require("../controller/playlistController");
const router = express.Router();

router
  .post("/playlists", createPlaylist)
  .get("/playlists", getPlaylist)
  .put("/user/:id",() => {})
  .delete("/user/:id", () => {})

exports.playlistRoutes = router;
