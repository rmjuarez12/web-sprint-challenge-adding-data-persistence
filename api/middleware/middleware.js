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
    const insertData = req.body;

    model
      .create(insertData)
      .then((obj) => {
        const response = convertIntToBoolHelper(obj, key);
        req.newObj = response;
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
      [key]: item[key] === 0 ? false : true,
    };

    return fullObj;
  });

  return convertedArray;
}

//* Export Modules
module.exports = {
  convertIntToBool,
};
