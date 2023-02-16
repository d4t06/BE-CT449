const express = require("express");
const route = express.Router();
// controller
const contactController = require ("../controllers/contactController")

route.get("/", contactController.index);
route.post("/", contactController.addContact)
route.delete("/", contactController.destroy)

route.get("/favorite", contactController.favorite)
route.get("/:id", contactController.getOne)
route.put("/:id", contactController.updateOne)
route.delete("/:id", contactController.deleteOne)


module.exports = route;
