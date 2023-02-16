const contactRouter = require("./contact")

const route = function (app) {
   
   app.use("/api/contacts", contactRouter);

};

module.exports = route;
