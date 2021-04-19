const express=require("express");
const app =express();
const morgan=require("morgan");
const postRoutes=require("./routes/post.js")

app.use(morgan("dev"));


app.use("/",postRoutes);
app.listen(8080);
