const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth , homeController.getHome)

router.post('/addGame', homeController.addGame)

module.exports = router