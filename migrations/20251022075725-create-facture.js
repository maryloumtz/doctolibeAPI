'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Factures", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      montant: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_rendezvous: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Rendez_vous', 
          },
          key: 'id',
        },
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Factures")
  }
};
