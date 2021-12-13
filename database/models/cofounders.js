'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CoFounders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  };
  CoFounders.init({
    name: DataTypes.TEXT,
    experience: DataTypes.TEXT,
    position: DataTypes.TEXT,
    isCoFounder: DataTypes.BOOLEAN,
    isBoardMember: DataTypes.BOOLEAN,
    applicationId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'CoFounders'
  })
  return CoFounders
}
