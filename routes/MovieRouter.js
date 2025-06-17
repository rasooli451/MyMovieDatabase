

const {Router} = require("express");

const MovieRouter = Router();
const MovieFormController = require("../controllers/MovieFormController");



MovieRouter.get("/create", MovieFormController);


module.exports = MovieRouter;