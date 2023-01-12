const express = require('express'),
    cors = require("cors")
const { createLink, getLinks } = require('../controllers/linkController')
const router = express.Router()

router.post('/links', createLink)
    .get('/links', getLinks)


exports.linkRoutes = router;