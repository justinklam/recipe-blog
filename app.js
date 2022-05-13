const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require('express-fileupload');
const session = require('cookie-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require("dotenv").config();

const app = express();
const port = normalizePort(process.env.PORT || "3000");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // for static files
app.use(expressLayouts);
app.use(cookieParser('RecipeRepoSecure'));
app.use(session({
  secret: 'RecipeRepoSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

// views
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// routes
const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () =>
  console.log(`Recipe Repo is listening on Port:${port} 🐯`)
);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
