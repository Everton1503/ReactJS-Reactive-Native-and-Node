const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

//conectando banco de dados MongoDB
mongoose.connect('mongodb+srv://admin:1234@cluster0-7xdmy.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


//falando pro express que valor utilizar JSON
app.use(cors())
app.use(express.json())
app.use(routes)
// Métodos HTTP get, post, put, delete

// Tipor de Parâmetros

// Query Params: ?nome=Everton (Mais utilizado get, ficam visiv) -> request.query
// Route Parms: users/1 (Put, Delete) -> request.params
// Body Corpo da requisição (post) -> request.body

app.listen(3333)