const { Router } = require('express');
const categoryRouter = Router();
const categoryController = require("../controllers/categoryController");

categoryRouter.get("/", categoryController.categoryControllerGet);
categoryRouter.get("/:id", categoryController.categoryControllerIdGet);

module.exports = categoryRouter;