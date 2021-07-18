var express = require("express");
var path = require("path");
const pathToRoot = require("./util/path");

var indexRouter = require("./backend/routes/index");

var app = express();

// view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(pathToRoot, "client", "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(pathToRoot, "client", "public")));

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("LISTENING");
});

console.log(pathToRoot);
