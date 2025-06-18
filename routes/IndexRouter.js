


const asyncHandler = require('express-async-handler');
const {Router} = require('express');
const IndexController = require("../controllers/IndexController");

const indexRouter = Router();
const CreateCategoryController = require("../controllers/CreateCategoryController");







indexRouter.get("/", IndexController);



indexRouter.post("/newCategory", CreateCategoryController);





module.exports = indexRouter;


