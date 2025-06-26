


const asyncHandler = require('express-async-handler');
const {Router} = require('express');


const indexRouter = Router();
const IndexController = require("../controllers/Index/IndexController");
const CreateCategoryController = require("../controllers/Category/CreateCategoryController");
const RemoveMovieController = require("../controllers/Movie/RemoveMovieController");
const EditMovieController = require("../controllers/Movie/EditMovieController");
const EditPostMovieController = require("../controllers/Movie/EditPostMovieController");
const CategoryEditController = require("../controllers/Category/CategoryEditController");
const CategoryEditPostController = require("../controllers/Category/CategoryEditPostController");
const CategoryRemoveController = require("../controllers/Category/CategoryRemoveController");
const WarningController = require("../controllers/Category/WarningController");




indexRouter.get("/", IndexController);



indexRouter.post("/newCategory", CreateCategoryController);


indexRouter.get("/remove/:id", RemoveMovieController);


indexRouter.get("/edit/:id", EditMovieController);

indexRouter.post("/edit/:id", EditPostMovieController);

indexRouter.get("/editc/:id", CategoryEditController);

indexRouter.post("/editc/:id", CategoryEditPostController);

indexRouter.get("/removec/:id", CategoryRemoveController);

indexRouter.get("/warning/:id", WarningController);












module.exports = indexRouter;


