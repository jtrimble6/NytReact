// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const logger = require("morgan");

// Express
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("combined"));

// Static
app.use(express.static(path.join(__dirname, "client")));

// Routes
const routes = require("./routes");
app.use(routes);

// Mongo Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// PORT/Listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`)
});