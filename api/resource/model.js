//* Import DB settings
const db = require("../../data/dbConfig");

//* Function to get all resources
function getAll() {
  return db("resources");
}

//* Function to get a resource by ID
function getByID(resource_id) {
  return db("resources").where({ resource_id });
}

//* Function to create a new entry
function create(resource) {
  return db("resources")
    .insert(resource)
    .then((id) => {
      return getByID(id);
    });
}

//* Export Modules
module.exports = {
  getByID,
  create,
  getAll,
};
