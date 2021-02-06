//* Import DB Settings
const db = require("../../data/dbConfig");

//* Function to get all tasks
function getAll() {
  return db("tasks");
}

//* Function to get a specific task
function getByID(task_id) {
  return db("tasks").where({ task_id });
}

//* function to create new task entry
function create(task) {
  return db("tasks")
    .insert(task)
    .then((id) => {
      return getByID(id);
    });
}

//* Export modules
module.exports = {
  getAll,
  getByID,
  create,
};
