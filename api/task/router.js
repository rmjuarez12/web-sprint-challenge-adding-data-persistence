//* Import express and setup router
const express = require("express");
const router = express.Router();

//* Import models
const tasksModel = require("./model");

//* Import Middleware
const getMiddleware = require("../middleware/middleware");

//* Handle Endpoints

//-- GET
// Get all tasks
router.get(
  "/",
  getMiddleware.convertIntToBool(tasksModel, "task_completed", "get"),
  (req, res) => {
    const { newObjs } = req;

    res.status(200).json(newObjs);
  }
);

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
router.post(
  "/",
  getMiddleware.convertIntToBool(tasksModel, "task_completed", "post"),
  (req, res) => {
    const { newObj } = req;

    res.status(201).json(newObj[0]);
  }
);

//* Export Router
module.exports = router;
