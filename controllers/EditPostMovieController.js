



const {body, validationResult} = require("express-validator");
const { editMovie } = require("../database/queries");




validateMovie = [
    body("name").notEmpty().withMessage("Name field Should not be empty!"),
    body("release").notEmpty().withMessage("Release date field should not be empty!"),
    body("director").notEmpty().withMessage("Director field should not be empty!"),
    body("rating").trim().isInt({min : 0, max : 100}).withMessage("Rating should be a number between 0 and 100"),
    body("file").custom((value, {req}) => {
        if (req.files){
            const file = req.files.picture;
            if (!file.mimetype.includes("image")){
                throw new Error("File Uploaded is not an image");
            }
            const tenMB = 10485760;
            if (file.size > tenMB){
                throw new Error("File uploaded is too large");
            }
            return true;
        }
        else{
            return true;
        }
    })
]




const EditPostMovieController = [
    validateMovie, async function(req, res){
        let errors = validationResult(req);
        if (!errors.isEmpty()){
        return res.status(400).render("Pages/index", {content : "../Partials/Errors", errors : errors.array()});
        }
        const {name, release, rating, director, category_id} = req.body;
        const {id} = req.params;
        if (req.files){
            const fileData = req.files.picture.data;
            const dataType = req.files.picture.mimetype;
            await editMovie(id, name, release, rating, category_id, director, fileData, dataType);
        }
        else{
            await editMovie(id,name, release, rating, category_id, director, null, null);
        }
        if (req.originalUrl.includes("movies"))
              res.redirect("/movies");
        else if(req.originalUrl.includes("category")){
            res.redirect(`/category/${req.body.previous}`);
        }
        else
            res.redirect("/");
    }
]



module.exports = EditPostMovieController;

