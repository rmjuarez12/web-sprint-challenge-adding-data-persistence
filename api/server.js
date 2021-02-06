//* Import Express and setup server
const express = require("express");
const server = express();

//* Ensure express can parse JSON
server.use(express.json());

//* Export Server
module.exports = server;
