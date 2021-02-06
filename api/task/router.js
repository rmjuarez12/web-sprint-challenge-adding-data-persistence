//* Import express and setup router
const express = require("express");
const router = express.Router();

//* Import models
const tasksModel = require("./model");

//* Handle Endpoints

//-- GET
// Get all tasks
router.get("/", (req, res) => {
  tasksModel
    .getAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  tasksModel
    .getByID(id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//-- POST
router.post("/", (req, res) => {
  const task = req.body;

  tasksModel
    .create(task)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//* Export Router
module.exports = router;
