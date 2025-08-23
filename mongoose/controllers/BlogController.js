const Postagem = require('../models/Postagem') // importacao do model Postagem

module.exports = class BlogController{ //exportacao da classe
    static renderizaBlog(req,res){  //funcao para renderizar a página inicial | estatico nao precisa de um objeto da classe para ser chamada
        res.render('blogs/home') 
    }
    static async renderizaPostagens(req,res){
        const postagens = Postagem.find().lean() // passa o objeto postagens
        res.render('blogs/postagens', { postagens })
    }
    static async formulario(req,res){
        res.render('blogs/formulario')
    }
    static async formularioPOST(req,res){
        const titulo = req.body.titulo
        const autor = req.body.autor
        const descricao = req.body.descricao
        const tema = req.body.tema
        const postagem = new Postagem({titulo, autor, descricao, tema})
        await postagem.save()
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
    
    static async editarPostagem(req, res){
        const id = req.params.id 
        const postagem = await Postagem.getPostagensId(id)
        res.render('blogs/edit', { postagem })
    }
    static async editarPostagemPOST(req, res){
        const id = req.body.id
        const autor = req.body.autor
        const tema = req.body.tema
        const titulo = req.body.titulo
        const descricao = req.body.descricao

        const postagem = new Postagem(titulo, tema, autor, descricao)
        await postagem.atualizarPostagem(id)
        res.redirect('/blog/postagens')
    }
}
