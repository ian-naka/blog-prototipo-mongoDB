const mongoose = require('mongoose')
const { Schema } = mongoose

const Postagem = mongoose.model(
    'Postagem',
    new Schema({
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        descricao: {type: String, required: true},
        tema: {type: String, required: true
        }
    }),
)

module.exports = Postagem