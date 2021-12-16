'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class GarageApplications extends Model {
    static associate (models) {
      models.GarageApplications.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'creator'
      })
    }
  }
  GarageApplications.init({
    name: DataTypes.STRING,
    userId: DataTypes.UUID,
    briefly: DataTypes.TEXT,
    valueDefination: DataTypes.TEXT,
    existingSolutions: DataTypes.TEXT,
    uniqueness: DataTypes.TEXT,
    targetUsers: DataTypes.TEXT,
    businessModel: DataTypes.TEXT,
    validation: DataTypes.TEXT,
    futureTarget: DataTypes.TEXT,
    teamIntroduction: DataTypes.TEXT,
    startupExperience: DataTypes.TEXT,
    achievement: DataTypes.TEXT,
    status: DataTypes.INTEGER,
    targetMarket: DataTypes.TEXT,
    coFounders: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'GarageApplications'
  })
  return GarageApplications
}
