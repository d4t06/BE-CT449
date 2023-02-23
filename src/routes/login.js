const express = require("express");
const route = express.Router();
// controller
const loginController = require("../controllers/loginController")

route.post("/", loginController.login)
route.get("/", loginController.logout)


module.exports = route;
