const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const Route = require("./Route/api");

const app = express();

app.use(
  cors({
    origin: true,
    methods: "GET,PUT,POST",
    preflightContinue: true,
    optionsSuccessStatus: 204,
    credentials: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use("/api", Route);

app.get("*", function(req, res, next) {
  console.log("SERVER ERROR, RESTART");
  res.sendStatus(404);
});

const port = process.env.PORT || 3000;
app.set(port, port);

var server = http.createServer(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
