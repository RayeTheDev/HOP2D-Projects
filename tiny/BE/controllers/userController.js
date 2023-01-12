const { User } = require("../models/userModels");


const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: "", password: "" };

    if (err.code === 11000) {
        errors.email = 'That email is already registered'
        return errors;
    }

    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors;
};

exports.createUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);

    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send({ errors })
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


