//Neste arquivo iremos codificar a criação do DB

const Sequelize = require ('sequelize')
const modelFilme = require ('./models/films');

const sequelize = new Sequelize({  //Conexão com o DB
    dialect: 'sqlite',
    storage: './apifilm.db'
  });

const film = modelFilme (sequelize, Sequelize)

sequelize.sync({ force: false }) //Método de sincronização de tabela
.then(() => {
    console.log ('Tabelas Atualizadas'.bgGreen.black)
})

module.exports ={
    film //Modulo para exportar minha BD
}