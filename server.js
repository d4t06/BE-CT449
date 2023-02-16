const express = require('express')
const app = express()
const port = 3000
const route = require('./src/routes')


// connect database
require("./connectDB");

// define json type
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})