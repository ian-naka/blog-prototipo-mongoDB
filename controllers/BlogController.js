const Postagem = require('../models/Blog') // importacao do model Blog

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
        titulo = req.body.titulo
        tema = req.body.tema
        autor = req.body.autor
        descricao = req.body.descricao

        const postagem = new Postagem(titulo, tema, autor, descricao)
        postagem.save()
        res.redirect('/blog/postagens')
    }
}
