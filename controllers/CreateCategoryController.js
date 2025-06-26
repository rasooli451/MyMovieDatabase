

const {CreateCategory} = require("../database/queries");


const {body, validationResult} = require("express-validator");
const asyncHandler = require("express-async-handler");


const validateImage = [
    body("name").notEmpty().withMessage("An error occured, name should not be empty!"),
    body("description").notEmpty().withMessage("An error occured, description should not be empty!").isLength({min : 1, max : 3000}).withMessage("Description should be between 1 and 3000 characters"),
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










const CreateCategoryController =[validateImage, asyncHandler(async function(req, res){
    const {name, description} = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return res.status(400).render("Pages/index", {content :"../Partials/Errors" , errors : errors.array()});
    }

    const fileData = req.files.picture.data;
    const dataType = req.files.picture.mimetype;
    const result = await CreateCategory(name, description, fileData, dataType);
    if (result){
        res.redirect("/");
    }
    else{
        return res.status(400).render("Pages/index", {content : "../Partials/Errors", errors : [{msg : "An Error Occured, Category Already Exists"}]});
    }
})]





module.exports = CreateCategoryController;



