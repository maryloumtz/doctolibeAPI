const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Praticiens = Sequelize.define('Praticien', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_naissance: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        specialite: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Praticiens;
}