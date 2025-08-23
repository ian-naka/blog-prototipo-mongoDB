const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/blog')
    console.log('Conectamos no mongodb por meio do mongoose!')
}

main().catch((err) => {
    console.log(`Deu erro na conexão via mongoose: ${err}`)
})

module.exports = mongoose