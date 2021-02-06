//* Import express and setup Router
const express = require("express");
const router = express.Router();

//* Import Models
const projectsModel = require("./model");

//* Import Middleware
const getMiddleware = require("../middleware/middleware");

//* Handle Endpoints

//-- GET
router.get(
  "/",
  getMiddleware.convertIntToBool(projectsModel, "project_completed", "get"),
  (req, res) => {
    const { newObjs } = req;

    res.status(200).json(newObjs);
  }
);

router.get("/:id", (req, res) => {
  const { id } = req.params;

  projectsModel
    .getByID(id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//-- POST
router.post(
  "/",
  getMiddleware.convertIntToBool(projectsModel, "project_completed", "post"),
  (req, res) => {
    const { newObj } = req;

    res.status(201).json(newObj[0]);
  }
);

//* Export Router
module.exports = router;
