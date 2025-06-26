

const {Router} = require("express");

const MovieRouter = Router();
const MovieFormController = require("../controllers/Index/MovieFormController");
const AddMovieController = require("../controllers/Movie/AddMovieController");

const MovieIndexController = require("../controllers/Movie/MovieIndexController");
const EditMovieController = require("../controllers/Movie/EditMovieController");
const EditPostMovieController = require("../controllers/Movie/EditPostMovieController");
const RemoveMovieController = require("../controllers/Movie/RemoveMovieController");


MovieRouter.get("/", MovieIndexController);


MovieRouter.get("/create", MovieFormController);



MovieRouter.post("/Add", AddMovieController);


MovieRouter.get("/edit/:id", EditMovieController);

MovieRouter.post("/edit/:id", EditPostMovieController);

MovieRouter.get("/remove/:id", RemoveMovieController);

module.exports = MovieRouter;