


const {Router} = require('express');


const CategoryRouter = Router();


const CategoryController = require("../controllers/CategoryController");
const CategoryIndexController = require("../controllers/CategoryIndexController");


CategoryRouter.get("/", CategoryIndexController);


CategoryRouter.get("/create", CategoryController);




module.exports = CategoryRouter;



