const express = require('express')
const route = express.Router()

//controller
const authController = require("../controllers/authController") 

route.post('/login', authController.handleLogin)
route.post('/register', authController.handleRegister)

module.exports = route;
