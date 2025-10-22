const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Factures = Sequelize.define('Facture', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        montant: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_rendezvous: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'Rendez_vous',
                key: 'id'
            }
        }
    });

    Factures.associate = function(models) {
        Factures.belongTo(models.Rendez_vous, {
            foreingKey: 'id_rendezvous',
            as: 'rendezvous'
        })
    };

    return Factures;
}