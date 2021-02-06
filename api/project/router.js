//* Import express and setup Router
const express = require("express");
const router = express.Router();

//* Import Models
const projectsModel = require("./model");

//* Handle Endpoints

//-- GET
router.get("/", (req, res) => {
  projectsModel
    .getAll()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

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
router.post("/", (req, res) => {
  const projectData = req.body;

  projectsModel
    .create(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//* Export Router
module.exports = router;
