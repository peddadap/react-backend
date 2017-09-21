'use strict';

module.exports = function(sequelize, DataTypes) {
  var Issuances = sequelize.define('Issuances', {
    "id": { type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true },
    "TicketId": { type:DataTypes.INTEGER },
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
    "CostBasis": { type: DataTypes.STRING },
    "CBRcoveredLotIndicator": { type: DataTypes.STRING },
    "CBRPricePerShare": { type: DataTypes.FLOAT },
    "CBRPriceAvailable": { type: DataTypes.FLOAT },
    "CBRAcquisitionMethod": { type: DataTypes.STRING },
    "CBRAcquisitionDate": { type: DataTypes.DATE },
    "CBRTCN": { type: DataTypes.STRING },
    "GlobalID": { type: DataTypes.STRING },
    "EmailAddress": { type: DataTypes.STRING },
    "Address1": { type: DataTypes.STRING },
    "Address2": { type: DataTypes.STRING },
    "City": { type: DataTypes.STRING },
    "USState": { type: DataTypes.STRING },
    "Province": { type: DataTypes.STRING },
    "TaxID": { type: DataTypes.STRING },
    "VestingDate": { type: DataTypes.DATE },
    "SharesVested": { type: DataTypes.INTEGER },
    "SharesWithheldforTaxes": { type: DataTypes.INTEGER },
    "NetSharesReleased": { type: DataTypes.INTEGER },
    "IssuanceType": { type: DataTypes.STRING },
    "DWACInstructions": { type: DataTypes.STRING },
    "WithheldSharesDisposition": { type: DataTypes.INTEGER },
    "CommonAccountNumber": { type: DataTypes.STRING },
    "TerminationDate": { type: DataTypes.DATE },
    "SharesTerminated": { type: DataTypes.INTEGER },
    "Disposition": { type: DataTypes.STRING }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Issuances;
};
