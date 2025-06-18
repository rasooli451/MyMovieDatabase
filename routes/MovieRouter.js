

const {Router} = require("express");

const MovieRouter = Router();
const MovieFormController = require("../controllers/MovieFormController");
const AddMovieController = require("../controllers/AddMovieController");

const MovieIndexController = require("../controllers/MovieIndexController");




MovieRouter.get("/", MovieIndexController);


MovieRouter.get("/create", MovieFormController);



MovieRouter.post("/Add", AddMovieController);


module.exports = MovieRouter;