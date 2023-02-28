const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth , homeController.getHome)

router.post('/searchGame', homeController.searchGame)

router.post('/addGame', homeController.addGame)
router.post('/toggleCompleted', homeController.updateGame)
router.delete('/deleteGame', homeController.deleteGame)

module.exports = router