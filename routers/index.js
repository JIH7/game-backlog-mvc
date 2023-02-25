const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')
const authController = require('../controllers/auth')

router.get('/', indexController.getIndex)

router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)

router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router