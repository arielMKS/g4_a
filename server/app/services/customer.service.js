const mssql = require("../../mssql");
const TYPES = require("tedious").TYPES;
const toCamel = require("./toCamel.js");

const getAll = () => {
  // console.log("CUSTOMER SERVICE FIRING");
  return mssql.executeProc("Customers_SelectAll").then(response => {
    const convertToCamel = toCamel(response.resultSets[0]);
    return convertToCamel;
  });
};

// const del = id => {
//   return mssql.executeProc("Customers_Delete", sqlRequest => {
//     sqlRequest.addParameter("Id", TYPES.Int, id);
//   });
// };

// const post = payload => {
//   return mssql.executeProc("Customers_Insert", sqlRequest => {
//     sqlRequest.addParameter("Email", TYPES.NVarChar, payload.email, {
//       length: 225
//     });
//     sqlRequest.addParameter("FirstName", TYPES.NVarChar, payload.firstName, {
//       length: 30
//     });
//     sqlRequest.addParameter("LastName", TYPES.NVarChar, payload.lastName, {
//       length: 50
//     });
//     sqlRequest.addParameter("Ip", TYPES.NVarChar, payload.ipAddress, {
//       length: 15
//     });
//     sqlRequest.addParameter("Latitude", TYPES.Float, payload.latitude);
//     sqlRequest.addParameter("Longitude", TYPES.Float, payload.longitude);
//   });
// };

// const update = (
//   id,
//   firstName,
//   lastName,
//   email,
//   ipAddress,
//   longitude,
//   latitude
// ) => {
//   return mssql.executeProc("Customers_Update", sqlRequest => {
//     sqlRequest.addParameter("Id", TYPES.Int, id);
//     sqlRequest.addParameter("FirstName", TYPES.NVarChar, firstName, {
//       length: 30
//     });
//     sqlRequest.addParameter("LastName", TYPES.NVarChar, lastName, {
//       length: 50
//     });
//     sqlRequest.addParameter("Email", TYPES.NVarChar, email, { length: 225 });
//     sqlRequest.addParameter("Ip", TYPES.NVarChar, ipAddress, {
//       length: 15
//     });
//     sqlRequest.addParameter("Longitude", TYPES.Float, longitude);
//     sqlRequest.addParameter("Latitude", TYPES.Float, latitude);
//   });
// };

// const getById = id => {
//   return mssql
//     .executeProc("Customers_SelectById", sqlRequest => {
//       sqlRequest.addParameter("Id", TYPES.Int, id);
//     })
//     .then(response => {
//       const convertToCamel = toCamel(response.resultSets[0]);
//       return convertToCamel;
//     });
// };

// const search = (firstName, lastName, email, ipAddress) => {
//   return mssql
//     .executeProc("Customers_SelectByEmail", sqlRequest => {
//       sqlRequest.addParameter("Email", TYPES.NVarChar, email, { length: 225 });
//       sqlRequest.addParameter("Ip", TYPES.NVarChar, ipAddress, { length: 15 });
//     })
//     .then(response => {
//       const convertToCamel = toCamel(response.resultSets[0]);
//       return convertToCamel || [];
//     })
//     .catch(error => {
//       return [];
//     });
// };

module.exports = {
  getAll
};
