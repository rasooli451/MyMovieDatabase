

const {Router} = require("express");

const MovieRouter = Router();
const MovieFormController = require("../controllers/MovieFormController");
const AddMovieController = require("../controllers/AddMovieController");

const MovieIndexController = require("../controllers/MovieIndexController");
const EditMovieController = require("../controllers/EditMovieController");
const EditPostMovieController = require("../controllers/EditPostMovieController");
const RemoveMovieController = require("../controllers/RemoveMovieController");


MovieRouter.get("/", MovieIndexController);


MovieRouter.get("/create", MovieFormController);



MovieRouter.post("/Add", AddMovieController);


MovieRouter.get("/edit/:id", EditMovieController);

MovieRouter.post("/edit/:id", EditPostMovieController);

MovieRouter.get("/remove/:id", RemoveMovieController);

module.exports = MovieRouter;