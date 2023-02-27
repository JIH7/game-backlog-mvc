const express = require('express')
const router = express.Router()
const gamePageController = require('../controllers/gamePage')

router.post('/', gamePageController.getGamePage)

module.exports = router