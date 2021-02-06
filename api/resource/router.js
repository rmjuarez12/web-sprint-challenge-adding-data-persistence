//* Import express and setup router
const express = require("express");
const router = express.Router();

//* Import Models
const resourcesModel = require("./model");

//* Handle Endpoints

//-- GET
// Get all resources
router.get("/", (req, res) => {
  resourcesModel
    .getAll()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Get a specific resource
router.get("/:id", (req, res) => {
  const { id } = req.params;

  resourcesModel
    .getByID(id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//-- POST
// Create a new resource entry
router.post("/", (req, res) => {
  const resourceData = req.body;

  resourcesModel
    .create(resourceData)
    .then((resource) => {
      res.status(201).json(resource[0]);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//* Export modules
module.exports = router;
