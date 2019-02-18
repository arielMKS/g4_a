const mssql = require("../../mssql");
const TYPES = require("tedious").TYPES;
const toCamel = require("./toCamel.js");

const deleteAll = () => {
  console.log("SERVICE DELETE");
  return mssql
    .executeProc("CustomersData_DeleteAll")
    .then(response => {
      return response;
    })
    .catch(error => error);
};

const post = payload => {
  // console.log("CUSTOMER SERVICE FIRING", payload);
  return mssql
    .executeProc("CustomersData_Insert", sqlRequest => {
      sqlRequest.addParameter("json", TYPES.NVarChar, payload, {
        length: 2147483648
      });
    })
    .then(response => {
      // console.log("CUSTOMER SERVICE RESPONSE", response);
    })
    .catch(error => console.log("ERROR SERVICE"));
};

const getAll = () => {
  // console.log("CUSTOMER SERVICE FIRING");
  return mssql
    .executeProc("CustomersData_SelectAll")
    .then(response => {
      const convertToCamel = toCamel(response.resultSets[0]);
      return convertToCamel;
    })
    .catch(error => {
      console.log("ERROR CUSTOMER SERVICE GETALL");
      return 0;
    });
};

module.exports = {
  deleteAll,
  post,
  getAll
};
