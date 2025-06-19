


const asyncHandler = require('express-async-handler');
const {Router} = require('express');
const IndexController = require("../controllers/IndexController");

const indexRouter = Router();
const CreateCategoryController = require("../controllers/CreateCategoryController");
const RemoveMovieController = require("../controllers/RemoveMovieController");






indexRouter.get("/", IndexController);



indexRouter.post("/newCategory", CreateCategoryController);


indexRouter.get("/remove/:id", RemoveMovieController);





module.exports = indexRouter;


