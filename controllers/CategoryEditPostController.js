

const {body, validationResult} = require("express-validator");
const { editCategory } = require("../database/queries");



const validateImage = [
    body("name").notEmpty().withMessage("An error occured, name should not be empty!"),
    body("description").notEmpty().withMessage("An error occured, description should not be empty!"),
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



const CategoryEditPostController = [validateImage, async function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.render("Pages/index", {content : "../Partials/Errors", errors : errors.array()});
    }
    const {id} = req.params;
    const {name, description} = req.body;
    let result = false;
    if (req.files){
        const fileData = req.files.picture.data;
        const dataType = req.files.picture.mimetype;
        result = await editCategory(id, name, description, fileData, dataType);
    }
    else{
         result = await editCategory(id, name, description, null, null);
    }

    if (result){
        if (req.originalUrl.includes("editCat"))
              res.redirect(`/category/${id}`);
        else if(req.originalUrl.includes("category/editc"))
             res.redirect(`/category`);
        else
             res.redirect("/");
    }
    else{
        res.render("Pages/index", {content : "../Partials/Errors", errors : [{msg : "An error occured, a category by this name already exists!"}]});
    }
}]


module.exports = CategoryEditPostController;