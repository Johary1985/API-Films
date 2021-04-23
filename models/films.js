// Neste arquivo incluímos os parâmetros de nossa tabela que serão exportados através do Sequelize

module.exports = (sequelize, type) => {
    return sequelize.define('film', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: type.STRING,
        description: type.STRING,
        genero: type.STRING,
        score: type.INTEGER,
        // image: type.BLOB,
    })
}

// const { Sequelize, Model, DataTypes } = require ('sequelize');

// const options = { logging: false};
// const sequelize = new Sequelize ("sqlite: apifilm.db", options);

// class films extends Model {}

// films.init(

//     {
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },


//         description: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },

//         genero: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },

//         score: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },

//     },

//       { sequelize }  


// );