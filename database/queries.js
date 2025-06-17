
const Pool = require("./pool");
const asyncHandler = require("express-async-handler");








const CreateCategory = asyncHandler(async function(name, description){
    const exists = await CategoryExists(name);
    if (!exists){
        await Pool.query("INSERT INTO categories (name, description) VALUES ($1,$2)", [name, description]);
        return true;
    }
    else{
        return false;
    }
})


const CategoryExists = asyncHandler(async function(name){
    const {rows} = await Pool.query("SELECT * FROM categories WHERE name ILIKE ($1)",[name]);
    if (rows.length != 0){
        return true;
    }
    else{
        return false;
    }
})



const AddMovieToCategory = asyncHandler(async function(movieName, releaseDate, rating,categoryId, directorId){
    await Pool.query("INSERT INTO movies (Name, releaseDate, rating, category_id, director_id) VALUES ($1,$2,$3,$4,$5)", [movieName, releaseDate, rating, categoryId, directorId]);
})


const GetCategoryId = asyncHandler(async function(categoryName){
    const {rows} = await Pool.query("SELECT category_id FROM categories WHERE name=($1)", [categoryName]);
    return rows.categoryId;
})






const AddDirector = asyncHandler(async function(name){
    const exists = await DirectorExists(name);
    if (!exists){
        await Pool.query("INSERT INTO directors (name) VALUES ($1)", [name]);
        return true;
    }
    else{
        return false;
    }
})


const DirectorExists = asyncHandler(async function(directorName){
    const {rows} = await Pool.query("SELECT * FROM directors WHERE name ILIKE ($1)", [directorName]);
    if (rows.length > 0){
        return true;
    }
    else{
        return false;
    }
})




const RemoveMovie = asyncHandler(async function(movieName){
    await Pool.query("DELETE FROM movies WHERE Name=($1)", [movieName]);
})


const RemoveCategory = asyncHandler(async function(categoryName){
    await Pool.query("DELETE FROM categories WHERE name=($1)", [categoryName]);
})


const getAllCategories = asyncHandler(async function(){
    const {rows} = await Pool.query("SELECT * FROM categories");
    return rows;
})


const getAllMovies = asyncHandler(async function(){
    const {rows} = await Pool.query("SELECT * FROM movies");
    return rows;
})

module.exports = {CreateCategory, CategoryExists, AddMovieToCategory, GetCategoryId, AddDirector, DirectorExists, RemoveMovie, RemoveCategory, getAllCategories, getAllMovies};