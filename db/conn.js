const { MongoClient } = require('mongodb')
const uri = 'mongodb://localhost:27017/blog'
const client = new MongoClient(uri)

async function run(){
    try {
        await client.connect()
        console.log('Conectamos ao MongoDB')
    } catch (error) {
        console.log(`Deu erro na conexão ao banco, no arquivo conn.js: ${err}`)
    }
}
run()

module.exports = client