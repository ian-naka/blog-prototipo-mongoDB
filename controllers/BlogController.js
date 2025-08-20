const Blog = require('../models/Blog') // importacao do model Blog

module.exports = class BlogController{ //exportacao da classe
    static async renderizaBlog(req,res){  //funcao para renderizar a página inicial | estatico nao precisa de um objeto da classe para ser chamada
        res.render('blogs/home')
    }
    static async renderizaPostagens(req,res){
        res.render('blogs/postagens')
    }
}
