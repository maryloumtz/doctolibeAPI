'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Patients", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prenom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_naissance: {
        type: Sequelize.DATE,
        allowNull: false
      },
      adresse: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Patiens")
  }
};
