const customerService = require("../services/customer.service");

const getAll = (req, res) => {
  // console.log("CUSTOMER CONTROLLER FIRING");
  customerService
    .getAll()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
};

module.exports = {
  getAll
};
