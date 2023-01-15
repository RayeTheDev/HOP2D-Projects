const { User } = require("../../tiny/BE/models/userModels");

// const { User } = require("../models/userModels");
User
const handleErrors = (error) => {
    console.log(error.message, error.code);
    let err = { email: "", password: "" };

    if (error.message.includes("user validation failed")) {
        console.log(Object.values(error.errors));
    }
};

exports.createUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.create({ email, password });
        // console.log(user)
        res.status(201).json(user);

    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send('playlist not created')

    }

};

exports.getUsers = async (req, res) => {
    const result = await User.find({});
    res.send(result);
};


exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (user !== null) {
        if (user.password === password) {
            res.send(user);
        } else {
            res.status(401).json({ message: "Invalid password" });
        }
    } else {
        res.status(401).json({ message: "User not found" });
    }
};


exports.getUser = async (req, res) => {
    const id = req.params.id;
    const result = await User.findById({ _id: id }).populate("playlists", "");
    res.send(result);
};


