const Sequelize = require('sequelize')
const db = require('../db')

const Usuario = db.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    perfil: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Usuario