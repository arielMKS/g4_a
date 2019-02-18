const router = require("express").Router();

const customerController = require("../controllers/customer.controller");

// handle "api/customers"

router.get("/", customerController.getAll);
router.post("/", customerController.post);
router.delete("/", customerController.deleteAll);

module.exports = router;
