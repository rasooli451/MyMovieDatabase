


const asyncHandler = require('express-async-handler');
const {Router} = require('express');
const IndexController = require("../controllers/IndexController");

const indexRouter = Router();
const CreateCategoryController = require("../controllers/CreateCategoryController");
const RemoveMovieController = require("../controllers/RemoveMovieController");
const EditMovieController = require("../controllers/EditMovieController");
const EditPostMovieController = require("../controllers/EditPostMovieController");




indexRouter.get("/", IndexController);



indexRouter.post("/newCategory", CreateCategoryController);


indexRouter.get("/remove/:id", RemoveMovieController);


indexRouter.get("/edit/:id", EditMovieController);

indexRouter.post("/edit/:id", EditPostMovieController);





module.exports = indexRouter;


