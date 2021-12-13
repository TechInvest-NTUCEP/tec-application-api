'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GarageApplications', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.UUID
      },
      briefly: {
        type: Sequelize.TEXT
      },
      valueDefination: {
        type: Sequelize.TEXT
      },
      existingSolutions: {
        type: Sequelize.TEXT
      },
      uniqueness: {
        type: Sequelize.TEXT
      },
      targetUsers: {
        type: Sequelize.TEXT
      },
      businessModel: {
        type: Sequelize.TEXT
      },
      validation: {
        type: Sequelize.TEXT
      },
      futureTarget: {
        type: Sequelize.TEXT
      },
      teamIntroduction: {
        type: Sequelize.TEXT
      },
      startupExperience: {
        type: Sequelize.TEXT
      },
      achievement: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GarageApplications')
  }
}
