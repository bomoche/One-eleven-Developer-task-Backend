const express = require("express");
const cors = require("cors");
const sortRoute = require("./routes/alphabeticalSorting");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/webhook", sortRoute);

module.exports = app;