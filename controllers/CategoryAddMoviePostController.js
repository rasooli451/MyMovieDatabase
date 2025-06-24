const {AddMovieToCategory} = require("../database/queries");
const asyncHandler = require("express-async-handler");
const {body, validationResult} = require("express-validator");



const validateMovie = [
    body("name").notEmpty().withMessage("Name field Should not be empty!"),
    body("release").notEmpty().withMessage("Release date field should not be empty!"),
    body("director").notEmpty().withMessage("Director field should not be empty!"),
    body("rating").trim().isInt({min : 0, max : 100}).withMessage("Rating should be a number between 0 and 100"),
    body("file").custom((value, {req}) => {
        const file = req.files.picture;
        if (!file.mimetype.includes("image")){
            throw new Error("File Uploaded is not an image");
        }
        const tenMB = 10485760;
        if (file.size > tenMB){
            throw new Error("File uploaded is too large");
        }
        return true;
    })
]



const CategoryAddMoviePostController = [validateMovie, async function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.render("Pages/index", {content : "../Partials/Errors", errors : errors.array()});
    }
    const {name, release, rating, director, category_id, previous} = req.body;
    const fileData = req.files.picture.data;
    const dataType = req.files.picture.mimetype;
    const result = await AddMovieToCategory(name, release, rating, category_id,director,fileData,dataType);
    if (result){
        res.redirect(`/category/${previous}`);
    }
    else{
        res.status(400).render("Pages/index", {content : "../Partials/Errors", errors : [{msg : "An Error occured, Movie already Exists!"}]})
    }
}]



module.exports = CategoryAddMoviePostController;