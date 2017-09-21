'use strict';
module.exports = function(sequelize, DataTypes) {
  var Attachments = sequelize.define('Attachments', {
    id: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true
    },
    ticket_id: DataTypes.STRING,
    type: DataTypes.STRING,
    size: DataTypes.INTEGER,
    name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Attachments;
};