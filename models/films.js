// Neste arquivo incluímos os parâmetros de nossa tabela que serão exportados através do Sequelize

module.exports = (selquelize, type) => {
    return selquelize.define('film', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: type.TEXT,
        description: type.TEXT,
        genero: type.TEXT,
        score: type.NUMERIC,
        // image: type.BLOB,
    })
}