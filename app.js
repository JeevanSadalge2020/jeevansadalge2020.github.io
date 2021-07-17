var express = require("express");
var path = require("path");

var indexRouter = require("./src/routes/index");

var app = express();

// view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "src", "public")));

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("LISTENING");
});
