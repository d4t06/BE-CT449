const express = require('express')
const app = express()
const port = 3000
const route = require('./src/routes')
const session = require("express-session");
const cors = require('cors')

// connect database
require("./connectDB");

// use cors
app.use(cors({credentials: true, origin: "http://localhost:3001"}))

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