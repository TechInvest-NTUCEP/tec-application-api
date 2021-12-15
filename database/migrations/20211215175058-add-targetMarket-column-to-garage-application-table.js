'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('GarageApplications', 'targetMarket', {
          type: Sequelize.DataTypes.TEXT
        })
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
  }
}
