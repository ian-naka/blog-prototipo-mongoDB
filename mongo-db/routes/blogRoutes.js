const express = require('express')

const router = express.Router()

const BlogController = require('../controllers/BlogController')

router.get('/', BlogController.renderizaBlog)
router.get('/postagens', BlogController.renderizaPostagens)
router.get('/criarconteudo', BlogController.formulario)
router.post('/criarconteudo', BlogController.formularioPOST)
router.get('/:id', BlogController.getPostagens)
router.post('/remove/:id', BlogController.removePostagem)
router.get('/editarconteudo/:id', BlogController.editarPostagem)
router.post('/editarconteudo', BlogController.editarPostagemPOST)
module.exports = router
