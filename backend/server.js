const express = require("express");
const app = express();
const bodyParser = required("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./database.js")
const registrationRoutes = require("./route");

mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useNewUrlParser: true })
    .then(() => {
        console.log("Database is connected");
    }, err => {
        console.log("Cannot connect to the database: " + err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("./schema/User", registrationRoutes);

module.exports = app;