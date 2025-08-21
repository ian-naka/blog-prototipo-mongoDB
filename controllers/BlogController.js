const Postagem = require('../models/Postagem') // importacao do model Postagem

module.exports = class BlogController{ //exportacao da classe
    static renderizaBlog(req,res){  //funcao para renderizar a página inicial | estatico nao precisa de um objeto da classe para ser chamada
        res.render('blogs/home') 
    }
    static async renderizaPostagens(req,res){
        const postagens = await Postagem.getPostagens() // torna o metodo assincrono e traz as postagens
        res.render('blogs/postagens', { postagens}) // passa o objeto postagens
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
    static async getPostagens(req, res){
        const id = req.params.id
        const postagem = await Postagem.getPostagensId(id)
        res.render('blogs/postagem', { postagem })
    }

    static async removePostagem(req, res){
        const id = req.params.id
        await Postagem.removePostagemId(id)
        res.redirect('/blog/postagens')
    }
}
