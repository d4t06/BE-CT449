const express = require("express");
const route = express.Router();
// controller
const contactController = require ("../controllers/contactController")
// middleWare
const roleMiddleware = require("../middlewares/roleMiddleware")

route.get("/", contactController.index);
route.post("/",roleMiddleware.isAdmin, contactController.addContact)
route.delete("/",roleMiddleware.isAdmin, contactController.destroy)

route.get("/favorite", contactController.favorite)
route.get("/:id", contactController.getOne)
route.put("/:id",roleMiddleware.isAdmin, contactController.updateOne)
route.delete("/:id",roleMiddleware.isAdmin, contactController.deleteOne)


module.exports = route;
