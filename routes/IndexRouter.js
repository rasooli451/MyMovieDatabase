


const asyncHandler = require('express-async-handler');
const {Router} = require('express');
const IndexController = require("../controllers/IndexController");

const indexRouter = Router();
const CreateCategoryController = require("../controllers/CreateCategoryController");
const RemoveMovieController = require("../controllers/RemoveMovieController");
const EditMovieController = require("../controllers/EditMovieController");
const EditPostMovieController = require("../controllers/EditPostMovieController");
const CategoryEditController = require("../controllers/CategoryEditController");
const CategoryEditPostController = require("../controllers/CategoryEditPostController");
const CategoryRemoveController = require("../controllers/CategoryRemoveController");
const WarningController = require("../controllers/WarningController");




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


