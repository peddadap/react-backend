'use strict';

module.exports = function(sequelize, DataTypes) {
  var Grant = sequelize.define('Grant', {
    "id": { type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true },
    "AccountNumber": { type: DataTypes.STRING },
    "Name1": { type: DataTypes.STRING },
    "Name2": { type: DataTypes.STRING },
    "AddressAndCity": { type: DataTypes.STRING },
    "State/Province": { type: DataTypes.STRING },
    "ForeignCountryName": { type: DataTypes.STRING },
    "PostalCode": { type: DataTypes.STRING },
    "USTaxID": { type: DataTypes.STRING },
    "AccountType": { type: DataTypes.STRING },
    "Legend": { type: DataTypes.STRING },
    "Shares": { type: DataTypes.INTEGER },
    "IssueDate": { type: DataTypes.DATE },
    "BookEntry": { type: DataTypes.STRING },
    "GlobalID": { type: DataTypes.STRING },
    "EmailAddress": { type: DataTypes.STRING }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Grant;
};
