const express = require('express')
const router = express.Router()
const gamePageController = require('../controllers/gamePage')

router.get('/', gamePageController.getGamePage)
router.get('/random', gamePageController.getRandomGamePage)

module.exports = router