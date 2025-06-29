

const express = require("express");
const app = express();
const PORT = 5000;
const path = require("node:path");
const assetSource = path.join(__dirname, "public");
const fileUploader = require("express-fileupload");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetSource));
app.use(express.urlencoded({extended : true}));
app.use(fileUploader());

app.use(express.json());

const indexRouter = require("./routes/IndexRouter");
const CategoryRouter = require("./routes/CategoryRouter");
const MovieRouter = require("./routes/MovieRouter");







app.use("/", indexRouter);





app.use("/category", CategoryRouter);

//

app.use("/movies", MovieRouter)





app.use((req, res, next)=>{
    res.status(404).render("Pages/index", {content : "../Partials/Errors", errors : [{msg : "Sorry, the page you were looking for cannot be found."}]})
})


app.use((err, req, res, next) =>{
    res.status(500).render("Pages/index", {content : "../Partials/Errors", errors : [{msg : err.message}]})
})











app.listen(PORT, ()=>{
    console.log(`Server Listening on PORT ${PORT}`);
})