


const {Router} = require('express');


const CategoryRouter = Router();


const CategoryController = require("../controllers/CategoryController");
const CategoryIndexController = require("../controllers/CategoryIndexController");
const CategoryDetailsController = require("../controllers/CategoryDetailsController");
const EditMovieController = require("../controllers/EditMovieController");
const EditPostMovieController = require("../controllers/EditPostMovieController");
const CategoryEditController = require("../controllers/CategoryEditController");
const CategoryEditPostController = require("../controllers/CategoryEditPostController");

CategoryRouter.get("/", CategoryIndexController);


CategoryRouter.get("/create", CategoryController);


CategoryRouter.get("/:id", CategoryDetailsController);


CategoryRouter.get("/cat/edit/:id", EditMovieController);

CategoryRouter.post("/cat/edit/:id", EditPostMovieController);


CategoryRouter.get("/edit/:id", CategoryEditController);

CategoryRouter.post("/edit/:id", CategoryEditPostController);
/*CategoryRouter.get("/remove/:id", CategoryRemoveController);*/




module.exports = CategoryRouter;



