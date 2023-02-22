const contactRouter = require("./contact")

const route = function (app) {
   
   app.use("/api/contacts", contactRouter);

   app.use("/", (req, res) => {
      res.status(404).json("Resource not found");
   })

};

module.exports = route;
