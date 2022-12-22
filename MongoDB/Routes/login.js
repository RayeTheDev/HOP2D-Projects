const express = require("express"),
  cors = require("cors");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/users");

router
  .post(
    "/users",
    [check("email").isEmail(), check("password").isLength({ min: 5 })],
    createUser
  )
  .get("/users", getUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);

module.exports = router;
