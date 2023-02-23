const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.getIndex)
router.get('/login', indexController.getLogin)
router.get('/signup', indexController.getSignup)

module.exports = router