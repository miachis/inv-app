const { Router } = require("express");
const createGameController = require("../controllers/createController");
const createRouter = Router();

createRouter.get("/", createGameController.createGameControllerGet);
createRouter.post("/", createGameController.createGameControllerPost);

module.exports = createRouter;