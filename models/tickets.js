'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tickets = sequelize.define('Tickets', {
    id: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true
    },
    company_number: DataTypes.STRING,
    child_company_number: DataTypes.STRING,
    control_account_number: DataTypes.STRING,
    treasure_account_number: DataTypes.STRING,            
    type: DataTypes.STRING,
    created_date:{type:DataTypes.DATE,defaultValue: sequelize.fn('GETDATE')},
    submitted_date: DataTypes.DATE,
    status: DataTypes.STRING,
    priority:DataTypes.STRING,
    companyno:DataTypes.STRING 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Tickets;
};