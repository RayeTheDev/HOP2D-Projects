const { Schema, Types, model } = require('mongoose')

const linkSchema = new Schema({
    url: { type: String, required: true },
});

const Link = model("Link", linkSchema);

exports.Link = Link;
