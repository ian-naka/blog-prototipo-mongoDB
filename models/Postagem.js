
const conn = require('..db/conn')

class Postagem{

    constructor(titulo, tema, autor, descricao){
        this.titulo = titulo
        this.tema = tema
        this.autor = autor 
        this.descricao = descricao
    }
    save(){
        const postagem = db.conn().collection('Postagem').insertOne({
            titulo: this.titulo,
            tema: this.tema,
            autor: this.autor,
            descricao: this.descricao
        })
        return postagem
    } //metodo para salvar dados
}

module.exports = Postagem