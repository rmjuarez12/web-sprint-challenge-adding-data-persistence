//* Import DB Settings
const db = require("../../data/dbConfig");

//* Function to get all projects
function getAll() {
  return db("projects");
}

//* Function to return a specific project
function getByID(project_id) {
  return db("projects").where({ project_id });
}

//* Function to create a new project entry
function create(project) {
  return db("projects")
    .insert(project)
    .then((id) => {
      return getByID(id);
    });
}

//* Export Modules
module.exports = {
  getAll,
  getByID,
  create,
};
