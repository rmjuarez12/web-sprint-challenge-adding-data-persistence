//* Import Express and setup server
const express = require("express");
const server = express();

//* Ensure express can parse JSON
server.use(express.json());

//* Import Routers
const resourcesRouter = require("./resource/router");
const projectsRouter = require("./project/router");

//* Setup routers to be used
server.use("/api/resources", resourcesRouter);
server.use("/api/projects", projectsRouter);

//* Export Server
module.exports = server;
