//* Function to change the integer into a boolean text
const convertIntToBool = (model, key, method) => (req, res, next) => {
  if (method === "get") {
    model
      .getAll()
      .then((projects) => {
        const intToBool = convertIntToBoolHelper(projects, key);
        req.newObjs = intToBool;
        next();
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else {
    const projectData = req.body;

    model
      .create(projectData)
      .then((project) => {
        const newProject = convertIntToBoolHelper(project, key);
        req.newObj = newProject;
        next();
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
};

//* Helper to convert int to bool from an array
function convertIntToBoolHelper(array, key) {
  const convertedArray = array.map((item) => {
    const fullObj = {
      ...item,
      [key]: item.project_completed === 0 ? false : true,
    };

    return fullObj;
  });

  return convertedArray;
}

//* Export Modules
module.exports = {
  convertIntToBool,
};
