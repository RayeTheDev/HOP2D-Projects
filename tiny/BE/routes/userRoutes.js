const express = require("express"),
    cors = require("cors");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { createUser, getUsers, getUser, loginUser } = require("../controllers/userController");


router
    .post("/users", createUser)
    .post("/login", loginUser)
    .get("/users", getUsers)
    .get("/user/:id", getUser)
    .delete("/user/:id", () => { });

exports.userRoutes = router;
