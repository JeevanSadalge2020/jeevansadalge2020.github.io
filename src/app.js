const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const pathToRoot = require("./util/path");

const authRoutes = require("./backend/routes/authRoutes");
const otherRoutes = require("./backend/routes/otherRoutes");

const app = express();

// view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(pathToRoot, "client", "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(pathToRoot, "client", "public")));

app.use(authRoutes);
app.use(otherRoutes);

// database connection
const dbURI =
  "mongodb+srv://jeevan-tvastra:tvastra019@cluster-jeevan-sadalge.wmn3f.mongodb.net/tvastraDb";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(_ => app.listen(3000))
  .catch(err => console.log(err));
