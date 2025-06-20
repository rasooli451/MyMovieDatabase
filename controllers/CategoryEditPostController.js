

const {body, validationResult} = require("express-validator");
const { editCategory } = require("../database/queries");



const validateImage = [
    body("name").notEmpty().withMessage("An error occured, name should not be empty!"),
    body("description").notEmpty().withMessage("An error occured, description should not be empty!"),
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



const CategoryEditPostController = [validateImage, async function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.render("Pages/index", {content : "../Partials/Errors", errors : errors.array()});
    }
    const {id} = req.params;
    const {name, description} = req.body;
    const fileData = req.files.picture.data;
    const dataType = req.files.picture.mimetype;
    const result = await editCategory(id, name, description, fileData, dataType)

    if (result){
        res.redirect(`/category/${id}`);
    }
    else{
        res.render("Pages/index", {content : "../Partials/Errors", errors : [{msg : "An error occured, a category by this name already exists!"}]});
    }
}]


module.exports = CategoryEditPostController;