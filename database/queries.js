
const Pool = require("./pool");
const asyncHandler = require("express-async-handler");








const CreateCategory = asyncHandler(async function(name, description, data, filetype){
    const exists = await CategoryExists(name);
    if (!exists){
        await Pool.query("INSERT INTO categories (name, description,picture,datatype,count) VALUES ($1,$2,$3,$4,$5)", [name, description,data,filetype,0]);
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



const AddMovieToCategory = asyncHandler(async function(movieName, releaseDate, rating,categoryId, directorName, picture, datatype){
    const movieExistence = await movieExists(movieName, categoryId);
    if (!movieExistence){
    const exists = await DirectorExists(directorName);
    if (!exists){
        await AddDirector(directorName);
    }
    const director_id = await GetDirectorId(directorName);
    await Pool.query("INSERT INTO movies (Name, releaseDate, rating, category_id, director_id, picture, datatype) VALUES ($1,$2,$3,$4,$5,$6,$7)", [movieName, releaseDate, rating, categoryId, director_id,picture,datatype]);
    await increaseCount(categoryId);
    return true;
    }
    else{
        return false;
    }
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


const GetDirectorId = asyncHandler(async function(directorName){
    const {rows} = await Pool.query("SELECT director_id FROM directors WHERE name ILIKE ($1)", [directorName]);
    return rows[0].director_id;
})




const RemoveMovie = asyncHandler(async function(movieId, category_id){

    await Pool.query("DELETE FROM movies WHERE movie_id=($1)", [movieId]);
    await decreaseCount(category_id);
})




const increaseCount = asyncHandler(async function(category_id){
    const count = await getCount(category_id);
    await Pool.query("UPDATE categories SET count=($1) WHERE category_id=($2)", [count + 1, category_id]);
})


const decreaseCount = asyncHandler(async function(category_id){
    const count = await getCount(category_id);
    await Pool.query("UPDATE categories SET count=($1) WHERE category_id=($2)", [count - 1, category_id]);
})


const getCount = asyncHandler(async function(category_id){
    const {rows} = await Pool.query("SELECT count FROM categories WHERE category_id=($1)", [category_id]);
    console.log(category_id);
    console.log(rows);
    return rows[0].count;
})


const RemoveCategory = asyncHandler(async function(categoryName){
    await Pool.query("DELETE FROM categories WHERE name=($1)", [categoryName]);
})


const getAllCategories = asyncHandler(async function(){
    const {rows} = await Pool.query("SELECT * FROM categories");
    return rows;
})


const getAllMovies = asyncHandler(async function(){
    const {rows} = await Pool.query("SELECT movies.*, categories.name AS category, directors.name AS director FROM movies INNER JOIN categories ON movies.category_id=categories.category_id INNER JOIN directors ON movies.director_id=directors.director_id");
    return rows;
})

const movieExists = asyncHandler(async function(movieName, category_id){
    const {rows} = await Pool.query("SELECT * FROM movies WHERE Name ILIKE ($1) AND category_id=($2)", [movieName, category_id]);
    if (rows.length > 0){
        return true;
    }
    else{
        return false;
    }
})


const getMovie = asyncHandler(async function(movieId){
    const {rows} = await Pool.query("SELECT movies.*, categories.name AS category, directors.name AS director FROM movies INNER JOIN categories ON movies.category_id=categories.category_id INNER JOIN directors ON movies.director_id=directors.director_id WHERE movies.movie_id=($1)", [movieId]);
    return rows[0];
})



const editMovie = asyncHandler(async function(movieId,movieName, releaseDate, rating,categoryId, directorName, picture, datatype){
    const exists = await DirectorExists(directorName);
    if (!exists){
        await AddDirector(directorName);
    }
    const director_id = await GetDirectorId(directorName);
    let categoryChanged = false;
    const {rows} = await Pool.query("SELECT category_id FROM movies WHERE movie_id=($1)", [movieId]);
    if (rows[0].category_id != categoryId){
        categoryChanged = true;
    }
    await Pool.query("UPDATE movies SET name=($1), releasedate=($2), rating=($3),category_id=($4),director_id=($5),picture=($6),datatype=($7) WHERE movie_id=($8)", [movieName, releaseDate, rating, categoryId, director_id, picture, datatype, movieId]);
    if (categoryChanged){
        await increaseCount(categoryId);
        await decreaseCount(rows[0].category_id);
    }
})


module.exports = {CreateCategory, CategoryExists, AddMovieToCategory, GetCategoryId, AddDirector, DirectorExists, RemoveMovie, RemoveCategory, getAllCategories, getAllMovies,getMovie, editMovie};