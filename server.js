const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const route = require('./src/routes')
const session = require("express-session");
const cookieParser = require("cookie-parser")

// connect database
require("./connectDB");

// config cors
app.use(cors('http://localhost:30001'))

//use Session
app.use(session({
  secret: "process.env.SESSION_SECRET",
  resave: true,
  saveUninitialized: true,
  cookie:{maxAge: 5 * 60 * 1000}
}))

// cookie parser
// app.use(cookieParser())

// define json type
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})