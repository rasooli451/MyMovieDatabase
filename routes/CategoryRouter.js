


const {Router} = require('express');


const CategoryRouter = Router();


const CategoryController = require("../controllers/CategoryController");





CategoryRouter.get("/create", CategoryController);




module.exports = CategoryRouter;



