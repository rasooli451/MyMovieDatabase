

const express = require("express");
const app = express();
const PORT = 5000;
const path = require("node:path");
const assetSource = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetSource));
app.use(express.urlencoded({extended : true}));

const indexRouter = require("./routes/index/IndexRouter");
const CategoryRouter = require("./routes/CategoryRouter");
const MovieRouter = require("./routes/MovieRouter");






//for homepage, includes the template categories

app.use("/", indexRouter);




//for 

app.use("/category", CategoryRouter);

//

app.use("/movies", MovieRouter)


//











app.listen(PORT, ()=>{
    console.log(`Server Listening on PORT ${PORT}`);
})