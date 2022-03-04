const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;

app.get("/", function (_req, res) {
  res.end("It works!");
});

var server = app.listen(port, hostname, function () {
  console.log("Example app listening at http://%s:%s", hostname, port);
});
