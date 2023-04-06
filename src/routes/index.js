const contactRouter = require("./contact")
const authRouter = require('./auth')

const route = function (app) {
   
   app.use("/api/contacts", contactRouter);

   app.use("/api/auth", authRouter)

   app.use("/", (req, res) => {
      res.status(404).json("Resource not found");
   })

};

module.exports = route;
