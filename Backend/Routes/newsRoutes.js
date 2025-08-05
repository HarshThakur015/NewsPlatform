const express = require('express')
const router = express.Router()
const { getNews } = require('../controllers/newsController')
const auth = require('../middleware/auth')

router.get('/', auth, getNews)

module.exports = router