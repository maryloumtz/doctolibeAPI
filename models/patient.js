const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Patient = Sequelize.define('Patient', {
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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_naissance: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Patient;
}