const { Router } = require('express');
const categoryRouter = Router();
const categoryController = require("../controllers/categoryController");

categoryRouter.get("/", categoryController.categoryControllerGet);
categoryRouter.get("/:id", categoryController.categoryControllerIdGet);
categoryRouter.get("/:category/update/:id", categoryController.categoryControllerUpdateGet);
categoryRouter.post("/", categoryController.categoryControllerUpdatePost);

module.exports = categoryRouter;