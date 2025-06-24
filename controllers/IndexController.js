
const {getAllCategories, getFeaturedMovies} = require("../database/queries");
const asyncHandler = require("express-async-handler");

const IndexController = asyncHandler(async function(req, res){
    const categories = await getAllCategories();
    const movies = await getFeaturedMovies();
    res.render("Pages/index", {content : "../Partials/homePage", categories, movies, path : ""});
})



module.exports = IndexController;






















