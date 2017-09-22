'use strict';

module.exports = function(sequelize, DataTypes) {
  var Termination = sequelize.define('Termination', {
    "ID": { type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true },
    "RequestID":{ type:DataTypes.INTEGER },
    "AccountNumber": { type: DataTypes.STRING },
    "Name1": { type: DataTypes.STRING },
    "Name2": { type: DataTypes.STRING },
    "TaxID": { type: DataTypes.STRING },
    "TerminationDate": { type: DataTypes.DATE },
    "SharesTerminated": { type: DataTypes.INTEGER },
    "Disposition": { type: DataTypes.STRING },
    "GlobalID": { type: DataTypes.STRING }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Termination;
};
