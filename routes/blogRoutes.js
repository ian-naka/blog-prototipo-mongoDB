const express = require('express')

const router = express.Router()

const BlogController = require('../controllers/BlogController')

router.get('/', BlogController.renderizaBlog)
router.get('/postagens', BlogController.renderizaPostagens)

module.exports = router
