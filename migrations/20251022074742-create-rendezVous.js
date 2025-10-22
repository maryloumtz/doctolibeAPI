'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Rendez_vous", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      id_patient: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Patients',
          },
          key: 'id',
        },
        allowNull: false,
      },
      id_praticien: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Praticiens',
          },
          key: 'id',
        },
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Rendez_vous")
  }
};
