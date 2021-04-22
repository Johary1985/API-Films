const express = require ('express');
const app = express();
const colors = require('colors');
const crudRouter = require('./routes/crud') //Arquivo de rotas

require('./db') //Chamando a BD

app.use('/crud', crudRouter) //Todas as rotas que ven com /crud vai ser gerenciado pelo crudRouter
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.listen(5000, () =>{
    console.log('SERVER ON PORT 5000'.bgGreen.black)
})