'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CoFounders', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.TEXT
      },
      experience: {
        type: Sequelize.TEXT
      },
      position: {
        type: Sequelize.TEXT
      },
      isCoFounder: {
        type: Sequelize.BOOLEAN
      },
      isBoardMember: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      applicationId: {
        type: Sequelize.UUID
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CoFounders')
  }
}
