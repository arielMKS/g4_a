const customerService = require("../services/customer.service");

const deleteAll = (req, res) => {
  // console.log("CONTROLLER delete");
  customerService
    .deleteAll()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
};

const post = (req, res) => {
  // console.log("CUSTOMER CONTROLLER FIRING", req.body);
  customerService
    .post(JSON.stringify(req.body))
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
};

const getAll = (req, res) => {
  // console.log("CUSTOMER CONTROLLER FIRING");
  customerService
    .getAll()
    .then(response => {
      console.log("CONTROLLER GETALL SUCCESS");
      res.status(200).json(response);
    })
    .catch(error => {
      console.log("CONTROLLER GETALL ERROR");
      res.status(500).send(error);
    });
};

module.exports = {
  deleteAll,
  post,
  getAll
};
