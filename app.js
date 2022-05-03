const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = normalizePort(process.env.PORT || "3000");

require("dotenv").config();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // for static files
app.use(expressLayouts);

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// routes
const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () =>
  console.log(`Recipe-blog is listening on Port:${port} 🐯`)
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
