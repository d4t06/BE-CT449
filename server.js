const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const route = require('./src/routes')
const session = require("express-session");

// connect database
require("./connectDB");

// use cors
app.use(cors({credentials: true, origin: "http://localhost:3001"}))

//use Session
app.use(session({
  secret: "process.env.SESSION_SECRET",
  resave: true,
  saveUninitialized: true,
  cookie:{maxAge: 5 * 60 * 1000}
}))

// define json type
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})