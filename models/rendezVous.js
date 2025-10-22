const { Sequelize } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Rendez_vous = Sequelize.define('Rendez_vous', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_patient: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'Patients',
                key: 'id'
            }
        },
        id_praticien: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'Praticiens',
                key: 'id'
            }
        }
    }); 

    Rendez_vous.associate = function(models) {
        Rendez_vous.belongTo(models.Patients, {
            foreingKey: 'id_patient',
            as: 'patient'
        });
        Rendez_vous.belongTo(models.Praticien, {
            foreingKey: 'id_praticien',
            as: 'praticien'
        });
    };

    return Rendez_vous;
}