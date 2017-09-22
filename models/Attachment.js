'use strict';
var Request = require('./Request');
module.exports = function(sequelize, DataTypes) {
  var Attachment = sequelize.define('Attachment', {
    ID: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true
    },
    "RequestID":{ type:DataTypes.INTEGER },
    Type: DataTypes.STRING,
    Size: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Path:DataTypes.STRING,
    RequestID:DataTypes.INTEGER
  });
  return Attachment;
};