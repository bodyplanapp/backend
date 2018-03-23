'use strict';
module.exports = (sequelize, DataTypes) => {
  var Plans = sequelize.define('Plans', {
    title: DataTypes.STRING
  }, {});
  Plans.associate = function(models) {
    // associations can be defined here
  };
  return Plans;
};