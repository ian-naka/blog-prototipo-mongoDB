const Postagem = require('../models/Postagem') // importacao do model Postagem

module.exports = class BlogController{ //exportacao da classe
    static async renderizaBlog(req,res){  //funcao para renderizar a página inicial | estatico nao precisa de um objeto da classe para ser chamada
        res.render('blogs/home')
    }
    static async renderizaPostagens(req,res){
        res.render('blogs/postagens')
    }
    static async formulario(req,res){
        res.render('blogs/formulario')
    }
    static async formularioPOST(req,res){
        const titulo = req.body.titulo
        const tema = req.body.tema
        const autor = req.body.autor
        const descricao = req.body.descricao

        const postagem = new Postagem(titulo, tema, autor, descricao)
        postagem.save()
        res.redirect('/blog/postagens')
    }
}
