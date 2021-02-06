// Complete your db configuration using the `environment` variable.
const environment = process.env.NODE_ENV || "development";

//* Import knex and config file
const knex = require("knex");
const config = require("../knexfile");

//* Setup a variable with the config file
const configuredKnex = knex(config[environment]);

//* Export the configuration settings
module.exports = configuredKnex;
