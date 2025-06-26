


const {Router} = require('express');


const CategoryRouter = Router();


const CategoryController = require("../controllers/Category/CategoryController");
const CategoryIndexController = require("../controllers/Category/CategoryIndexController");
const CategoryDetailsController = require("../controllers/Category/CategoryDetailsController");
const EditMovieController = require("../controllers/Movie/EditMovieController");
const EditPostMovieController = require("../controllers/Movie/EditPostMovieController");
const CategoryEditController = require("../controllers/Category/CategoryEditController");
const CategoryEditPostController = require("../controllers/Category/CategoryEditPostController");
const CategoryAddMovieController = require("../controllers/Category/CategoryAddMovieController");
const CategoryAddMoviePostController = require("../controllers/Category/CategoryAddMoviePostController");
const CategoryRemoveController = require("../controllers/Category/CategoryRemoveController");
const WarningController = require("../controllers/Category/WarningController");

CategoryRouter.get("/", CategoryIndexController);


CategoryRouter.get("/create", CategoryController);


CategoryRouter.get("/:id", CategoryDetailsController);


CategoryRouter.get("/cat/edit/:id", EditMovieController);

CategoryRouter.post("/cat/edit/:id", EditPostMovieController);


CategoryRouter.get("/editc/:id", CategoryEditController);

CategoryRouter.post("/editc/:id", CategoryEditPostController);


CategoryRouter.get("/editCat/:id", CategoryEditController);

CategoryRouter.post("/editCat/:id", CategoryEditPostController);




CategoryRouter.get("/:id/Add", CategoryAddMovieController);

CategoryRouter.post("/:id/Add", CategoryAddMoviePostController);


CategoryRouter.get("/removec/:id", CategoryRemoveController);

CategoryRouter.get("/warning/:id", WarningController);







module.exports = CategoryRouter;



