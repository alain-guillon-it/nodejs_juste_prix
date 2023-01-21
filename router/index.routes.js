const router = require("express").Router();
const myController = require("../App/controllers");

router.get("/", myController.getHome);

module.exports = router;
