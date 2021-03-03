const express = require('express')
const server = express()

server.use('/api', function (req, res, next) {
    //As diferenças entre USE e GET são que no USE usa-se o prefixo, então se eu fazer uma requisição pra 
    //localhost:3000/api/blablabla ele vai executar, no GET isso não acontece, no USE é registrado a rota
    // para todos o verbos http, e no USE ele não aceita requisições de qualquer coisa que não comece com /api
    console.log('Início...')
    next() // next foi pro outro middleware e executou o fim por ultimo
    console.log("Fim...")
})

server.use('/api', function (req, res) {
    console.log('Resposta...')
    res.send("<h1>API!</h1>")
})

server.listen(3000, () => console.log('Executando...'))