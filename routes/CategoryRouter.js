


const {Router} = require('express');


const CategoryRouter = Router();


const CategoryController = require("../controllers/CategoryController");
const CategoryIndexController = require("../controllers/CategoryIndexController");
const CategoryDetailsController = require("../controllers/CategoryDetailsController");
const EditMovieController = require("../controllers/EditMovieController");
const EditPostMovieController = require("../controllers/EditPostMovieController");
const CategoryEditController = require("../controllers/CategoryEditController");
const CategoryEditPostController = require("../controllers/CategoryEditPostController");
const CategoryAddMovieController = require("../controllers/CategoryAddMovieController");
const CategoryAddMoviePostController = require("../controllers/CategoryAddMoviePostController");
const CategoryRemoveController = require("../controllers/CategoryRemoveController");
const WarningController = require("../controllers/WarningController");

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


/*CategoryRouter.get("/remove/:id", CategoryRemoveController);*/




module.exports = CategoryRouter;



