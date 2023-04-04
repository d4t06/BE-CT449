const express = require("express");
const route = express.Router();
// controller
const contactController = require("../controllers/contactController");
// middleWare
const roleMiddleware = require("../middlewares/roleMiddleware");

route.get("/search", contactController.search);

route.get("/favorite", contactController.favorite);
route.get("/:id", contactController.getOne);
route.put("/:id", contactController.updateOne);
route.delete("/:id", contactController.deleteOne);

route.delete("/", contactController.destroy);
route.post("/", contactController.addContact);
route.get("/", contactController.index);

module.exports = route;
