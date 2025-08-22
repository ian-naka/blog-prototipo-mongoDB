
const { ObjectId } = require('mongodb')
const conn = require('../db/conn')

class Postagem{

    constructor(titulo, tema, autor, descricao){
        this.titulo = titulo
        this.tema = tema
        this.autor = autor 
        this.descricao = descricao
    }
    save(){
        const postagem = conn.db().collection('Postagem').insertOne({
            titulo: this.titulo,
            tema: this.tema,
            autor: this.autor,
            descricao: this.descricao
        })
        return postagem
    } //metodo para salvar dados

    static getPostagens(){
        const postagens = conn.db().collection('Postagem').find().toArray()
        return postagens
    } // cria o metodo static para resgatar as postagens

    static async getPostagensId(id){
        const postagem = await conn.db().collection('Postagem').findOne({ _id: new ObjectId(id)})
        return postagem
    }
    static async removePostagemId(id){
        const postagem = await conn.db().collection('Postagem').deleteOne({ _id: new ObjectId(id)})
        return postagem
    }
    
}

module.exports = Postagem