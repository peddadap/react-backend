'use strict';
module.exports = function(sequelize, DataTypes) {
  var Request = sequelize.define('Request', {
    ID: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true
    },
    ParentCompany: DataTypes.STRING,
    ChildCompany: DataTypes.STRING,
    ControlAccount: DataTypes.STRING,
    TreasuryNumber: DataTypes.STRING,            
    Type: DataTypes.STRING,
    CreatedDate:{type:DataTypes.DATE,defaultValue: sequelize.fn('GETDATE')},
    SubmittedDate: DataTypes.DATE,
    Status: DataTypes.STRING,
    Priority:DataTypes.STRING
 }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Request;
};