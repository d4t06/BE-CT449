const express = require('express')
const app = express()
const port = 3000
const route = require('./src/routes')
const session = require("express-session");

// connect database
require("./connectDB");

// define json type
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use Session
app.use(session({
  secret: "abcde",
  resave: false,
  saveUninitialized: false
}))

//Routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})