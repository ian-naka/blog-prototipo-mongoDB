const express = require('express')
const exphbs = require('express-handlebars')

const blogRoutes = require('./routes/blogRoutes')
const conn = require('./db/conn')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set ('view engine', 'handlebars') //definicao de template engine

app.use(express.urlencoded({
    extended: true,
})) // middleware para transformar os dados da requisicao em req.body
app.use(express.static('public')) // leitura de arquivos estaticos como html ou css
app.use(express.json()) // middleware que instrui o servidor a ler e processar requisicoes em formmato json

app.use('/blog', blogRoutes)

app.listen(3100)