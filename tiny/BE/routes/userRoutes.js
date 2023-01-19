const express = require("express"),
    cors = require("cors");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { createUser, getUsers, getUser, loginUser, getAuthToken } = require("../controllers/userController");
const { checkUser, authenticateToken } = require("../middleware/userMiddleware");


router
    .post("/users", createUser)
    .post("/login", checkUser, loginUser)
    .post("/user", authenticateToken, getUsers)
    .get("/user/:id", getUser)
    .delete("/user/:id", () => { });

exports.userRoutes = router;
