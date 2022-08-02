const express = require('express')
const path = require('path')

const app = express()

// DEFININDO O TEMPLATE ENGINE
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// DEFININDO OS ARQUIVOS PUBLICOS
app.use(express.static(path.join(__dirname, 'public')))

// HABILITA SERVER PARA RECEBER DADOS VIA POST (FORMULARIO)
app.use(express.urlencoded({ extended: true }))

// ROTAS
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

// 404 ERROR (NOT FOUND)
app.use((req, res) => { //middleware
    res.send('Página não encontrada!')
})

// EXECUTANDO O SERVIDOR
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
