'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Konsul extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  Konsul.init({
    penyakit: DataTypes.STRING,
    waktu: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Konsul',
  });
  return Konsul;
};