var express = require("express");
var path = require("path");
var compression = require("compression");

const port = process.env.PORT || 8080;

const app = express();

app.use(compression());

app.use("/content", express.static(path.join(__dirname, "content")));

app.listen(port);
