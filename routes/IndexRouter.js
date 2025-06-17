


const asyncHandler = require('express-async-handler');
const {Router} = require('express');
const IndexController = require("../../controllers/IndexController");

const indexRouter = Router();








indexRouter.get("/", IndexController);





module.exports = indexRouter;


