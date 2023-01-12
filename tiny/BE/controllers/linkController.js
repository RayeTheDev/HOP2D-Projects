const { Link } = require('../models/linkModels')

exports.createLink = async (req, res) => {
    const body = req.body
    const result = await new Link(body).save()
    res.send(result)
}
exports.getLinks = async (req, res) => {
    const result = await Link.find({})
    res.send(result)
}